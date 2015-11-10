var app = angular.module('myNoteApp', []);
app.controller("noteCtrl", function($scope, $http) {

			$http.get("notes_sql.php")
			.success(function (response) {$scope.notes = response.records;});

			$scope.left = function (){ return 256 - $scope.name.length; };

			$scope.order = 'Sr';
			$scope.index = -1;
			document.getElementById("index").value = -1;

			$scope.name = "";
			$scope.clear = function(){
				$scope.name = "";
			};

			$scope.sort = function(label){
				switch(label)
				{
					case 'sr':
						$scope.order = 'Sr';
						break;
					case 'msg':
						$scope.order = 'Message';
						break;
					case 'crtd':
						$scope.order = 'Created';
						break;
					case 'mdfy':
						$scope.order = 'Modified';
						break;
					default:
						$scope.order = 'Sr';
				}
			};

			$scope.editNote = function(id)
			{
				var i = 0;
				var curr;
				for (i = 0; i < $scope.notes.length; i++)
				{
					if($scope.notes[i].Sr == id)
					{
						curr = $scope.notes[i].Message;
						$scope.index = id;
						document.getElementById("index").value = id;
						break;
					}	
				}
				$scope.name = curr;
			};

			$scope.deleteNote = function (nid) {
            //Defining $http service for deleting a note
                if(confirm("Are you sure ?"))
                {
                	var xsrf = $.param({id: nid});
					$http({
					    method: 'POST',
					    url: 'deleteNote.php',
					    data: xsrf,
					    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
					})
					.success(function (data) {
	                    $http.get("notes_sql.php")
	    					.success(function (response) {$scope.notes = response.records;});
	                });
                	
                }
                
        	};
		});
