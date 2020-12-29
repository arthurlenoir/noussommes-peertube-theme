function register ({ registerHook, peertubeHelpers }) {
  /* ANGULAR NAVIGATION-END */
    registerHook({
      target: 'action:router.navigation-end',
      handler: params => {
        if(document.querySelector('my-page-not-found')){
          const img = document.querySelector('my-page-not-found').querySelector('img')
          if(img){
            img.src = image404
          }
        }
      }
    })
}

export {
  register
}
