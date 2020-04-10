$(document).ready(function () {

    var deleteBtn = $('.delete-btn');

    $(deleteBtn).on('click', function(e){
        e.preventDefault();

        var delLink = $(this).attr('href');
        var result = confirm('Realmente deseja deletar essa tarefa?');
        if (result){
            window.location.href = delLink;
        }
    })
})