$(document).ready(function(){
  $('.img-wrapper').draggable({
    scroll:false,
    // snap:true,
    containment: "#dashboard",
    // addClasses:false,
    // snapMode: "inner",
    snap:true
    // appendTo :'body'
  });
  $('.img-wrapper img').resizable({
    aspectRatio: true,
    // disabled: true
    containment: ".boxes .box",
    animate:true,
    ghost:true,
    
  });
  $('.boxes .box').droppable({
    accecpt:'.img-wrapper img',
    // classes: {
    //   "ui-droppable-active": "ui-state-active",
    //   "ui-droppable-hover": "ui-state-hover"
    // },
    // drop:function( event, ui ){
    //   $('.boxes').forEach(box => {
    //     box.addClass( ".ui-droppable-active" )
    //   });

    // },
    // animate:true,
    // ghost:true,
  });
  
})