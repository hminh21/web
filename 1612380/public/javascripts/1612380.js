
//num:string
function isValidate(num)
{
	var x = Number(num.value);
	if (Number.isNaN(x) == true)
	{
		return false;
	}
	
	return true;
}

function checkValidate(input)
{	
	if (isValidate(input) == false)
	{
		document.getElementById("Error").style.color = "red";
		if (input.name == "FirstInput")
		{
			document.getElementById("Error").innerText = "Ô thứ nhất không phải là số thực";
		}
		else
		{
			document.getElementById("Error").innerText = "Ô thứ hai không phải là số thực";
		}
	}
	else
	{
			document.getElementById("Error").innerText = "";
	}
}

//sign:string
function signIsChecked(sign)
{
	if (document.querySelector('input[name="Sign"]:checked') == null)
	{
		return false;
	}
	
	return document.querySelector('input[name="Sign"]:checked').value;
}

function returnResult(num1, num2, sign)
{
	var result;
	
	switch(sign)
	{
		case "+":
		result = parseFloat(num1) + parseFloat(num2);
		break;
		case "-":
		result = parseFloat(num1) - parseFloat(num2);
		break;
		case "*":
		result = parseFloat(num1) * parseFloat(num2);
		break;
		case "/":
		result = parseFloat(num1) / parseFloat(num2);
		break;
	}
	return result;
}

function Calculate()
{
	var num1 = document.getElementById("FirstInput");
	var num2 = document.getElementById("SecondInput");
	var sign = signIsChecked(document.querySelector('input[name="Sign"]:checked'));
	
	
	//Kiem tra dau
	if (sign == false)
	{
		document.getElementById("Error").style.color = "red";
		document.getElementById("Error").innerText = "Chưa chọn phép tính";
		return;
	}
	
	//Kiem tra hai so hop le
	if (isValidate(num1) == false)
	{
		document.getElementById("Error").style.color = "red";
		document.getElementById("Error").innerText = "Số thứ nhất không hợp lệ";
		return;
	}
	
	if (isValidate(num2) == false || (sign == "/" && parseFloat(num2.value) == 0) == true)
	{
		document.getElementById("Error").style.color = "red";
		document.getElementById("Error").innerText = "Số thứ hai không hợp lệ";
		return;
	}
	
	//Thực hiện phép tính
	document.getElementById("Result").value = returnResult(num1.value,num2.value,sign);
}
