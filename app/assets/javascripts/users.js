/* global $, Stripe, stripeResponseHandler*/
//Document ready.
$(document).on('turbolinks:load',function(){
  var theForm = $('#pro_form');
  var submitBtn = $('#form-signup-btn');
  //Set stripe public key.
  Stripe.setPublishableKey( $('meta[name="stripe-key"]').attr('content') );
  
  //WHen user clicks form submit button.
  submitBtn.click(function(event){
    //Prevent default submission behavior. 
    event.preventDefault();
    
    //Collect credit card fields.
    var ccNum = $('#card_number').val(),
        cvcNum = $('#card_code').val(),
        expMonth = $('#card_month').val(),
        expYear = $('card_year').val();
    //Send card info to Stripe
    Stripe.createToken({
      number: ccNum, 
      cvc: cvcNum,
      exp_month: expMonth,
      exp_year: expYear
    }, stripeResponseHandler);
  
    
  });
  
  
  
  //Stripe will return a card token
  //Inject card token as hidden filed into form
  //Submit form to our rails app
     
});