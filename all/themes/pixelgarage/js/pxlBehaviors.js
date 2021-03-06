/**
 * This file contains all Drupal behaviours of the pixelgarage theme.
 *
 * Created by ralph on 05.01.14.
 */

(function ($) {

  /**
   * This behavior adds shadow to header on scroll.
   *
   */
   Drupal.behaviors.addHeaderShadow = {
    attach: function (context) {
      var isFixedHeader = true;

      $(window).off("scroll");
      $(window).on("scroll", function () {
        var $header              = $("header.navbar"),
            $headerCont          = $("header.navbar .container"),
            fixedHeaderScrollPos = 1,
            $width               = $(window).width();
        /*
        if ($width >= 768) {
          fixedHeaderScrollPos = 28;
        }
        else if ($width >= 480) {
          fixedHeaderScrollPos = 15;
        }
        else {
          fixedHeaderScrollPos = 0;
        }
        */

        if ($(window).scrollTop() >= fixedHeaderScrollPos) {
          //if (isFixedHeader) return;

          // keep header fixed at this scroll position
          //$header.removeClass('navbar-static-top').addClass('navbar-fixed-top');
          //$('body').removeClass('navbar-is-static-top').addClass('navbar-is-fixed-top');

          // fix header and add shadow
          //$header.css({position: 'fixed', top: -fixedHeaderScrollPos + 'px'});
          $headerCont.css("box-shadow", "0 4px 3px -4px gray");

          //isFixedHeader = true;
        }
        else {
          //if (!isFixedHeader) return;

          // set header to static in top scroll region
          //$header.removeClass('navbar-fixed-top').addClass('navbar-static-top');
          //$('body').removeClass('navbar-is-fixed-top').addClass('navbar-is-static-top');

          // remove shadow from header
          //$header.css({position: 'static', top: 'auto'});
          $headerCont.css("box-shadow", "none");

          //isFixedHeader = false;
        }
      });
    }
  };

  /**
   * Allows full size clickable cards (open node in full size).
   *
   * Remark: Disable this behavior, if flip card are used
   */
  Drupal.behaviors.fullSizeClickableCards = {
    attach: function () {
      var $clickableItems = $('.view-post-grid .pe-item-no-ajax'),
        $linkedItems = $('.view-post-grid .pe-item-linked');

      $clickableItems.once('click', function () {
        $(this).on('click', function () {
          window.location = $(this).find(".node-post .field-name-field-image a").attr("href");
          return false;
        });
      });
      $linkedItems.once('click', function () {
        $(this).on('click', function () {
          var link = $(this).find(".pe-item-inner > a").attr("href");
          window.open(link, '_blank');
          return false;
        });
      });
    }
  };


  /**
   * Defines font size classes on quotes according to its length.
   * @type {{attach: Drupal.behaviors.defineTextSize.attach}}
   */
  Drupal.behaviors.defineTextSize = {
    attach: function () {
      var $items = $('.node.node-post'),
          $quotes = $items.find('.field-name-field-quote .field-item');

      $quotes.each(function() {
        var $this = $(this),
            $text = $this.text();

        if ($text.length < 5) {
          // xl font size
          $this.addClass('font-size-xxl')
        }
        if ($text.length < 10) {
          // xl font size
          $this.addClass('font-size-xl')
        }
        else if ($text.length < 20) {
          // lg font size
          $this.addClass('font-size-lg')
        }
        else if ($text.length < 30) {
          // medium font size
          $this.addClass('font-size-md')
        }
        else if ($text.length < 40) {
          // small font size
          $this.addClass('font-size-sm')
        }
        else {
          // xs font size
          $this.addClass('font-size-xs')
        }
      });
    }
  };


  /**
   * Implements all filter buttons as toggle buttons.
   * @type {{attach: Drupal.behaviors.createToggleFilters.attach}}
   */
  Drupal.behaviors.createToggleFilters = {
    attach: function () {
      var $categoryWrapper = $('#edit-field-category-tid-wrapper'),
        $categoryFilters = $categoryWrapper.find('.form-type-bef-link'),
        $activeFilter = $categoryFilters.find('>a.active'),
        $categoryReset = $categoryWrapper.find('.form-item-edit-field-category-tid-all'),
        categoryResetLink = $categoryReset.find('>a').attr('href');

      //
      // hide reset filter and make active filter a toggle filter
      $categoryReset.hide();

      if ($activeFilter) {
        $activeFilter.attr('href', categoryResetLink);
      }
    }
  };

  /**
   * Implements the sort button as toggle button.
   * @type {{attach: Drupal.behaviors.createToggleSort.attach}}
   */
  Drupal.behaviors.createToggleSort = {
    attach: function () {
      var $sortWrapper = $('.views-widget-sort-by'),
        $sortItems = $sortWrapper.find('.form-type-bef-link'),
        $activeSort = $sortItems.find('>a.active'),
        $sortReset = $sortWrapper.find('.form-item-edit-sort-by-created'),
        sortResetLink = $sortReset.find('>a').attr('href');

      //
      // hide reset filter and make active filter a toggle filter
      $sortReset.hide();

      if ($activeSort) {
        $activeSort.attr('href', sortResetLink);
      }
    }
  };

  /**
   * Implements the reset behavior of all buttons, e.g. de/activation of reset button
   * according to the sort and filter button states.
   *
   * @type {{attach: Drupal.behaviors.activateResetButton.attach}}
   */
  Drupal.behaviors.activateResetButton = {
    attach: function () {
      var $toggleFilterWrapper = $('#toggle-filters-wrapper'),
        $categoryWrapper = $toggleFilterWrapper.find('#edit-field-category-tid-wrapper'),
        $sortWrapper = $toggleFilterWrapper.find('.views-widget-sort-by'),
        $resetCategoryLink = $categoryWrapper.find('.form-item-edit-field-category-tid-all > a'),
        $resetSortLink = $sortWrapper.find('.form-item-edit-sort-by-created > a'),
        $resetButton = $toggleFilterWrapper.find('.views-reset-button > button');

      //
      // de/activate reset button
      if ($resetCategoryLink.hasClass('active') && $resetSortLink.hasClass('active')) {
        $resetButton.addClass('active');
      }
    }
  };


})(jQuery);
