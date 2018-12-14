var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
		var config = {
			type: 'line',
			data: {
				labels: [],
				datasets: [{
					label: 'მიმდინარე წონა',
					backgroundColor: window.chartColors.red,
					borderColor: window.chartColors.red,
					data: [],
					fill: false,
				}, ]
			},
		
		};

		window.onload = function() {
			var ctx = document.getElementById('canvas').getContext('2d');
			window.myLine = new Chart(ctx, config);
		};
	

		function datasett() {
			daachira = 1;
			$("#wona2").toggleClass("show");
		}
	
		function addWona() {
			if($("#wona").val()<0) {
				alert("რანაირად? "  + $("#wona").val());
				return 0;
			}
			mtvleli = 1;
			var mimdinarewona = $("#wona").val();
			console.log("shevida" + mimdinarewona);	

			var month = MONTHS[config.data.labels.length % MONTHS.length];
				config.data.labels.push(month);
			config.data.datasets.forEach(function(dataset) {
				dataset.data.push(mimdinarewona);
			});
			window.myLine.update();
		
		}

		document.getElementById('removeData').addEventListener('click', function() {
			config.data.labels.splice(-1, 1); //წაშლა

			config.data.datasets.forEach(function(dataset) {
				dataset.data.pop();
			});

			window.myLine.update();
		});

