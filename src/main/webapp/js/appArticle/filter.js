indexAPP.filter("to_trusted",["$sce",function($sce){return function(text){return $sce.trustAsHtml(text)}}]);indexAPP.filter("dateUtil",function(){return function(data){return data.slice(0,10)}});