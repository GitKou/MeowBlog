<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>hello</title>
<body>
	<table border="1">
		<tr>
			<th>user</th>
			<th>password</th>
			<th>email</th>
			<th></th>
			<th></th>
		</tr>
		<c:forEach items="${userList}" var="user">
			<tr>
				<td>${user.username}</td>
				<td>${user.pwd}</td>
				<td>${user.email}</td>
				<td><button onclick="window.location='${user.id}'">update</button></td>
				<td><button onclick="window.location='delete/${user.id}'">delete</button></td>
			</tr>
		</c:forEach>
	</table>
	<br>
	<form action="add" >
		<input type="submit" value="add">
	</form>
</body>
</html>