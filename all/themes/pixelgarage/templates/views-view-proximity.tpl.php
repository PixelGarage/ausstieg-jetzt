<?php
/**
 * @file
 * View theme template to layout the proximity items and add the bootstrap modal dialog functionality to each item.
 */
?>

<div id="<?php print $pe_container_id; ?>" class="pe-container">
  <div class="pe-background-image"></div>
  <div class="grid-sizer"></div>
  <div class="gutter-sizer"></div>
  <div class="stamp stamp1"></div>

  <?php foreach ($rows as $id => $row): ?>
    <?php if (isset($testimonials[$id])): ?>
      <!--
      Add randomly chosen testimonials to the list
      -->
      <div class="pe-item pe-item-linked">
        <div class="pe-item-inner">
          <a role="button" href="<?php print $testimonials[$id]['testimonial_link']; ?>" target="_blank">
            <?php print $testimonials[$id]['rendered_testimonial']; ?>
          </a>
        </div>
      </div>
    <?php endif; ?>

    <?php if (isset($social_items[$id])): ?>
      <!--
      Add a set of SOME items to the list
      -->
      <div class="pe-item pe-item-ajax <?php print 'pe-item-' . $social_items[$id]['nid']; ?>" style="margin: 0 -2px">
        <div class="pe-item-inner">
          <!-- modal trigger -->
          <a class="button" role="button" href="<?php print $item_base_url . $social_items[$id]['nid']; ?>"
             data-ajax-load-param="<?php print $social_items[$id]['nid']; ?>" <?php print drupal_attributes($toggle_attributes); ?>>
            <?php print $social_items[$id]['rendered_entity']; ?>
          </a>
        </div>
      </div>
    <?php endif; ?>

    <?php if (isset($row)): ?>
      <!--
     Add non-ajax posts to the list
     -->
      <div
        class="pe-item pe-item-no-ajax <?php print 'pe-item-' . $ajax_load_params[$id]; ?> <?php if ($classes_array[$id]) print $classes_array[$id]; ?>"
        style="margin: 0 -2px">
        <div class="pe-item-inner">
          <!-- modal trigger
        <a class="button" role="button" href="<?php print $item_base_url . $ajax_load_params[$id]; ?>"
           data-ajax-load-param="<?php print $ajax_load_params[$id]; ?>" <?php print drupal_attributes($toggle_attributes); ?>>
        </a>
        -->
          <?php print $row; ?>
        </div>
      </div>
    <?php endif; ?>

  <?php endforeach; ?>

  <!--
  Add the rest of the SOME items to the end of the list
  -->
  <?php if (isset($social_items_rest)): ?>
  <?php foreach ($social_items_rest as $social_item): ?>
    <div class="pe-item pe-item-ajax <?php print 'pe-item-' . $social_item['nid']; ?>" style="margin: 0 -2px">
      <div class="pe-item-inner">
        <!-- modal trigger -->
        <a class="button" role="button" href="<?php print $item_base_url . $social_item['nid']; ?>"
           data-ajax-load-param="<?php print $social_item['nid']; ?>" <?php print drupal_attributes($toggle_attributes); ?>>
          <?php print $social_item['rendered_entity']; ?>
        </a>
      </div>
    </div>
  <?php endforeach; ?>
  <?php endif; ?>


  <?php if ($use_modal_dlg): ?>
    <!--
    Modal dialog displaying the item content
    The item content is retrieved via AJAX or added directly on full page loads
    -->
    <div id="pe-modal-dialog-<?php print $container_index; ?>" class="modal" tabindex="-1" role="dialog"
         aria-labelledby="pe-modal-label" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <!-- Header -->
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                aria-hidden="true">&times;</span></button>
            <?php if ($title): ?>
              <h2 class="modal-title" id="pe-modal-label"><?php print $title; ?></h2>
            <?php endif; ?>
            <div class="body-fading body-fading-top"></div>
          </div>
          <!-- Body -->
          <div class="modal-body">
            <?php if ($rendered_item) print $rendered_item; ?>
          </div>
          <!-- Footer -->
          <div class="modal-footer">
            <div class="body-fading body-fading-bottom"></div>
            <button type="button" class="btn btn-default" data-dismiss="modal"><?php print $close_text; ?></button>
          </div>

        </div>
      </div>
    </div>
  <?php endif; ?>

  <!--
  Content container that can be used to add any loaded content (via AJAX or direct call)
  -->
  <div id="pe-content-container-<?php print $container_index; ?>" class="pe-content-container" role="page">
    <div class="content">
      <?php if (!$use_modal_dlg && $rendered_item) print $rendered_item; ?>
    </div>
  </div>

</div>
