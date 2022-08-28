export default defineNuxtRouteMiddleware((to, from) => {
  if (process.client) {
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'instant' })

    // Retore scroll fixed
    const actived = 'scrollfixed--actived'
    const bodyActived = 'scrollfixed--body-actived'
    const $body = $('body')

    $('.scrollfixed').each(function() {
      const $fixed = $(this)
      const dataTargets = [
        'bottomedge-scrollto-top',
        'bottomedge-scrollto-bottom',
        'topedge-scrollto-top',
        'topedge-scrollto-bottom'
      ]
      dataTargets.forEach((dataTarget) => {
        $fixed.removeClass(actived +' '+ dataTarget)
      })
      $body.removeClass(bodyActived)
    })
  }
})