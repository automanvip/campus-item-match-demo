// 原型已迁移到 https://shiwu.driftpoint.cn/ ：清掉旧缓存并注销自己
self.addEventListener('install', () => self.skipWaiting())
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.map((k) => caches.delete(k))))
      .then(() => self.registration.unregister())
      .then(() => self.clients.matchAll({ type: 'window' }))
      .then((clients) => clients.forEach((c) => c.navigate('https://shiwu.driftpoint.cn/'))),
  )
})
