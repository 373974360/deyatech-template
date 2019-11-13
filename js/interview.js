// 打开一个 web socket
function webSocketMessage(modelId){
	var sockJS = new SockJS('/web/websocket/');
	var destination = "/topic/live/message/"+modelId+"/";
	var stompClient = Stomp.over(sockJS);
	stompClient.connect({}, function() {
	  	stompClient.subscribe(destination, function(message) {
	        alert("got message with body " + message);
		});
	});
    sockJS.onclose = function () {
       console.log("连接已关闭 "+new Date());
    }
}
function webSocketImage(modelId){
	var sockJS = new SockJS('/web/websocket/');
	var destination = "/topic/live/image/"+modelId+"/";
	var stompClient = Stomp.over(sockJS);
	stompClient.connect({}, function() {
	  	stompClient.subscribe(destination, function(message) {
	        alert("got message with body " + message);
		});
	});
    sockJS.onclose = function () {
       console.log("连接已关闭 "+new Date());
    }
}