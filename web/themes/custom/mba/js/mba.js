(function ($, Drupal) {
  Drupal.behaviors.mbaBehavior = {
    attach: function (context, settings) {
      // Using once() to apply the myCustomBehaviour effect when you want to do just run one function.
      $('article > h2 > a', context).once('mbaBehavior').addClass('coucou');
    }
  };
})(jQuery, Drupal);
