var socket = io();

socket.on('connect', function() {
    let NewElm = "<br/><h3>Connected with server</h3>"
    document.body.insertAdjacentHTML("beforeend", NewElm);
    console.log('connected with server!!!');

    socket.emit('createEmail', {
        to: "me@example.com",
        text: " Hey this is Mark saying 'HI'"
    });
});
socket.on('disconnect', function() {
    let NewElm = "<br/><h3>Disconnected from server</h3>"
    document.body.insertAdjacentHTML("beforeend", NewElm);
    console.log('disconnected from server!!!');

});

// socket.on('newEmail', function(email){
//     let NewElm = `<br/><p>You have a new email<br/>
//     from: ${email.from}<br/>
//     text: ${email.text}<br/>
//     sent: ${(new Date(email.createdAt)).toString()}
//     </p>`;
//     document.body.insertAdjacentHTML("beforeend", NewElm);
//     console.log('You have new email', email);
// });
 

socket.emit('createMessage', {
    from: "Andrew",
    text: "Yup, that works form me"
});

socket.on('newMessage', function(message){
    let NewElm = `<br/><h4>Message From: ${message.from}<br/>
    "${message.text}"<br/>
    Sent:${(new Date(message.createdAt)).toString()}</h3>`
    document.body.insertAdjacentHTML("beforeend", NewElm);
    console.log('disconnected from server!!!');

});