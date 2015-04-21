$(document).ready(function() {
	var dataList = (function(){
		var labelsFile = "../GitPageFrequencyTest/lib/labelsData.json";

		function loadLangData(success, lang) {
			$.getJSON( labelsFile, {
				format: "json"
				}).done(function( lablesData ) {
					success(lablesData, lang);
			});
		}

		function loadLangList(lablesData){
			_.each(lablesData, function(lang){
	    		$('#countryNames').append('<li class="langList">'+lang.name+'</li>');
	    	});
		}

		function loadPageData(pageData, lang) {
			var langData = _.where(pageData, {name: lang})[0];
			console.log(langData);
			_.each(langData.params, function(param){
				_.each(param.params, function(inerParam){
					$('#'+param.name+'>div>.'+inerParam.name).text(inerParam.value);
				});
			});
		}	

		function loadLangLabels() {
			$.getJSON( labelsFile, {
				format: "json"
				}).done(function( lablesData ) {
					_.each(lablesData, function(lang){
			    		$('#countryNames').append('<li class="langList">'+lang.name+'</li>');
			    	});
		    		$('.langList').on('click', function(e){
						var lang = $(this).text();
						dataList.loadPageLanguage(lang);
					});
			});
		}

		function loadPageLanguage(lang){
			loadLangData(loadPageData, lang);
		}

		return {
			loadLanguages: loadLangLabels,
			loadPageLanguage: loadPageLanguage
		};
	}());

	dataList.loadLanguages();

	$("#languages").on('click', function() {
		$('#countryNames').toggle(400);
	});
});
