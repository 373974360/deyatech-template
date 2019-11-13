var random;
function changeCreateImage(){
	random = Math.random();
	$("#random").val(random);
	$("#img").attr("src","/manage/common/getVerifyCode?random="+random); 
}
function insertAppeal(){
	$.ajax({
		url:"/submit.jhtml",
		data: $("#appealForm").serializeArray(),
		type:"post",
		dataType:"json",
		success:function(data){
			if(data.status==200){
				$('#appealForm').remove();
				$('#result_div #result_sq_code').append(data.data.data.sqCode);
				$('#result_div #result_query_code').append(data.data.data.queryCode);
				$('#result_div').show();
			}else{
				alert(data.message);
				changeCreateImage();
			}
		},
		error:function(data){
		}
	});
}
function iniAppealForm(){	
	var validator = $("#appealForm").validate({
		rules: {
			title:{
				required: true
			},
			deptId:{
				required: true
			},
			purId:{
				required: true
			},
			isOpen:{
				required: true
			},
			content:{
				required: true
			},
			userName:{
				required: true
			},
			cardId:{
				required: true
			},
			address:{
				required: true
			},
			phone:{
				required: true
			},
			email:{
				required: true
			},
			verifyCode:{
				required: true
			}
		},
		messages: {
			title:{
				required: "请输入信件标题"
			},
			deptId:{
				required: "请选择提交部门"
			},
			purId:{
				required: "请选择诉求目的"
			},
			isOpen:{
				required: "请选择是否公开"
			},
			content:{
				required: "请输入信件内容"
			},
			userName:{
				required: "请输入姓名"
			},
			cardId:{
				required: "请输入身份证号"
			},
			address:{
				required: "请输入联系地址"
			},
			phone:{
				required: "请输入联系电话"
			},
			email:{
				required: "请输入电子邮箱"
			},
			verifyCode:{
				required: "请输入验证码"
			}
		},
		errorPlacement: function(error, element) {
			error.appendTo( element.parent("td").find("div.cError") );
			error.appendTo( element.parent("span").parent("td").find("div.cError") );
			error.appendTo( element.parent("div").parent("td").find("div.cError") );
		},
		submitHandler: function(form) {
			insertAppeal();
		},
		success: function(label) {
			//label.text("ok!").addClass("success");
		}
	});
}
$(document).ready(function(){
	//加载验证码
	changeCreateImage();
	iniAppealForm();
	$("#btnRst").click();
});