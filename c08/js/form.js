$(function (){
    var $newItemButtom =  $('#newItemButton');
    var $newItemForm = $('#newItemForm');
    var $textInput = $('input:text');

    $newItemButtom.show();
    $newItemForm.hide();

    $('#showForm').on('click', function (){
        $newItemButtom.hide();
        $newItemForm.show();
    });

    $newItemForm.on('submit', function (e){
        e.preventDefault();
        var newText = $textInput.val();
        $('li:last').after('<li>' + newText + '</li>');
        $newItemButtom.show();
        $newItemForm.hide();
        $textInput.val('');
    });
});