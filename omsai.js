$.fn.serializeObject = function()
{
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};

function convertToSlug(Text)
{
    return Text
        .toLowerCase()
        .replace(/[^\w ]+/g,'-')
        .replace(/ +/g,'-')
        ;
}

$(document).ready(function(){
$('.ui.selection.dropdown').dropdown();

$("[name='cstmzeclm']").change(function(){ 

	if($("[name='cstmzeclm']:checked").val()==1)
		$("#accordion").show(1000);
	else
		$("#accordion").hide(1000);
});

$("#accordion").hide();

//$('.ui.checkbox').checkbox();

$("[name='rtitle']").focusout(function(){ 
	slug=convertToSlug($("[name='rtitle']").val());
	$.ajax({
		url:"api.php/?action=slugCr&data="+slug
	})
	.done(function(data){
		$("[name='rslug']").val(data);
	});
	
});

$("[name='tbl_name']").focusout(function(){

	old_tbl_name=$("[name='tbl_name']").val();
	tbl_name=convertToSlug($("[name='tbl_name']").val());
	$.ajax({
		url:"api.php/?action=tbl_name&data="+tbl_name
	})
	.done(function(data){
		if(data.substr(0,4)=="m*d_"){
			alert("Entered table name is not available. Table name : "+data.substr(4,data.length)+"  is available");
			$("[name='tbl_name']").val(data.substr(4,data.length));
		}
		else if(data.substr(0,4)=="0000"){
			alert(data.substr(4,data.length));
			$("[name='tbl_name']").val(old_tbl_name);
		}
		else if(old_tbl_name != data){
			alert("Entered table name is not available. <br/> Table name :  "+data+" is available");
			$("[name='tbl_name']").val(data);	
		}
		else
			$("[name='tbl_name']").val(data);
	});
});

$('#ttlUpd').click(function(){
	var ttlEd = $('#ttlEd').val();
	var rid= $('#rid').val();
	$.ajax({
		url:'api.php/?action=ttlUpd&id='+rid+'&data='+ttlEd
	})
	.done(function(data){
		alert(data);
	});
});

$('#dtpk').click(function(){
	var dtpk = $('#datepicker').val();
	var rid= $('#rid').val();
	$.ajax({
		url:'api.php/?action=dtpk&id='+rid+'&data='+dtpk
	})
	.done(function(data){
		alert(data);
	});
});

$('#upd').click(function(){
	var cols = $("#colNames").serializeObject();
	var rid= $('#rid').val();
	var data= '';
	for(var index in cols){ 
		data+=cols[index]+',';
	}
	data=data.substr(0,data.length-1);
	$.ajax({
		url:'api.php/?action=updCols&id='+rid+'&data='+data
	})
	.done(function(data){
		alert(data);
	});
});

$('#addC').click(function(){
	var rowsCount=$('#res_cols tr').length;
	var rid= $('#rid').val();
	var newRow="<tr><td>"+rowsCount+"</td><td><input type='text' id='col_"+(rowsCount-1)+"' name='col_"+(rowsCount-1)+"' placeholder='Column Value' /></td><td><i class='Remove Sign icon' id='remove_"+(rowsCount-1)+"' onclick='remov("+(rowsCount-1)+")' style='font-size:18px;cursor:pointer'> </i></td></tr>";
	$('#res_cols').append(newRow);
});

$('#pbStatus').click(function(){
	var pbStatus = $("[name='pbStatus']:checked").val();
	var rid = $('#rid').val();
	$.ajax({
		url:"api.php/?action=pbStatus&id="+rid+"&data="+pbStatus
	})
	.done(function(data){
		alert(data);
	});

});

$('#delete_data').click(function(){
	
	var tbl = $("#tble_value").val();
	if(confirm("Are you sure you want to wipe the entire data?"))
	$.ajax({
		url:"api.php/?action=delete_data&tbl="+tbl
	})
	.done(function(data){
		alert(data);
	});
});

$('#delete_result').click(function(){
	
	var tbl = $("#tble_value").val();
	var rid= $('#rid').val();
	if(confirm("Are you sure you want to Delete this Results page which deletes results too?"))
	$.ajax({
		url:"api.php/?action=delete_result&tbl="+tbl+"&id="+rid
	})
	.done(function(data){
		alert(data);
		window.location.href='edit.php';
	});
});

});

