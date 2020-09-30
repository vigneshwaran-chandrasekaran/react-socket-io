$(document).ready(function() {

    const socket = io('localhost:4000');

    $("#chat").on("submit", function (event) {
        event.preventDefault();
        const message = $("#message").val();
        sendMessage(message);
        $("#chat").trigger('reset');
    });

    // Send message
    function sendMessage(text) {
        socket.emit('message', text);
        var me = $('#me').find('tr').clone();
        me.find('p').html(text);
        $('.message tbody').append(me);
    }

    // Receive message
    socket.on('message', data => {
        var other = $('#other').find('tr').clone();
        other.find('p').html(data);
        $('.message tbody').append(other);
    });

});