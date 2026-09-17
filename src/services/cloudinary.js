const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
const UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET

/**
 * Uploads a file directly to Cloudinary using an unsigned upload preset.
 * Returns { url, publicId, width, height }.
 */
export async function uploadImage(file, { folder = 'lumen-ledger', onProgress } = {}) {
  if (!CLOUD_NAME || !UPLOAD_PRESET) {
    throw new Error('Cloudinary is not configured. Set VITE_CLOUDINARY_CLOUD_NAME and VITE_CLOUDINARY_UPLOAD_PRESET.')
  }

  const formData = new FormData()
  formData.append('file', file)
  formData.append('upload_preset', UPLOAD_PRESET)
  formData.append('folder', folder)

  const url = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`

  const data = await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open('POST', url)

    xhr.upload.onprogress = (e) => {
      if (onProgress && e.lengthComputable) {
        onProgress(Math.round((e.loaded / e.total) * 100))
      }
    }

    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(JSON.parse(xhr.responseText))
      } else {
        reject(new Error('Cloudinary upload failed: ' + xhr.responseText))
      }
    }
    xhr.onerror = () => reject(new Error('Cloudinary upload failed: network error'))
    xhr.send(formData)
  })

  return {
    url: data.secure_url,
    publicId: data.public_id,
    width: data.width,
    height: data.height,
  }
}

/**
 * Returns an optimized delivery URL for a Cloudinary image — auto format/quality
 * and a max width, so cards and hero images never ship an oversized original.
 */
export function optimizedUrl(url, { width } = {}) {
  if (!url || !url.includes('/upload/')) return url
  const transform = width ? `f_auto,q_auto,w_${width}` : 'f_auto,q_auto'
  return url.replace('/upload/', `/upload/${transform}/`)
}

/**
 * Deleting an asset requires a signature (secret), which cannot live in
 * client code. Expose a clear seam for a Cloud Function / server route
 * later; for now this documents the limitation instead of pretending to work.
 */
export async function deleteImage() {
  throw new Error(
    'Deleting Cloudinary assets requires a signed server-side request. Wire this to a Cloud Function that holds your Cloudinary API secret.'
  )
}
