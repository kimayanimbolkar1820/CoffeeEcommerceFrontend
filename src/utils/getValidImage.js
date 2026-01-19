export  const getValidImage = (images) => {
    try {
      if (typeof images === 'string') {
        const parsed = JSON.parse(images)
        if (Array.isArray(parsed)) return parsed[0]
      }
      if (Array.isArray(images)) return images[0]
    } catch {}
    return '/images/placeholder.png'
  }
