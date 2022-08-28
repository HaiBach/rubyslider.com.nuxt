export default defineNuxtRouteMiddleware((to, from) => {
  if (process.client) {
    if (jQuery) {
      jQuery('#main .rs01nav').remove()
      jQuery('#main .rs01pag').remove()
      jQuery('#main .rs01overlay-ghost').remove()
      jQuery('#main .rs01imgback').css({ width: '', height: '', left: '', top: '' })
    }

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'instant' })
  }
})