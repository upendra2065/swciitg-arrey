$("#button-add-another-field").on("click", function(){
    $('#container').append('<div class="form-group"><label id="username-password">Another Poll field</label><input type="text" class="form-control" placeholder="Add another poll field" onfocus="this.placeholder=""  onblur="this.placeholder="Add another poll field"></div>'); 
});