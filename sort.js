function sortTable(n) {
    const table = document.getElementById("myTable"); //getting the myTable id to update the table 
    let rows; // array of rows that needs to be compared and switch
    let switching = true; // when user first clicks on the header it is true
    let i, x, y; // i is used for loop, x and y will have elements that will be compared
    let shouldSwitch = false; // false b/c only when its true it should switch. boolean data type to that evaluate if two rows needs to be switched
    let order = "asc"; //order represents ascending or descending in string
    let switchcount = 0; //switchcount tracks if there are any switch occuring if not the process will stop
    
    
    //Make a loop that will continue until no switching has been done
    while (switching) {
      //start by saying: no switching is done:
      switching = false;
      rows = table.rows; // rows will get table row lenght from myTable id
      
      //i = 1 b/c the first row will be the header which we shouldn't switch
      for (i = 1; i < (rows.length - 1); i++) {
        
        /*Get the two elements you want to compare, one from current row and one from the next:*/
        x = rows[i].getElementsByTagName("TD")[n]; //current row TD represents table data, n is the index of first header
        y = rows[i + 1].getElementsByTagName("TD")[n]; //next row

        /*check if the two rows should switch place, based on the direction, asc or desc:
        if the data of x is greater than y then shouldSwitch will be true*/

        if (order == "asc" && (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase())) {
          
            //if so, mark as a switch and break the loop:
            shouldSwitch= true;
            break;
          
        } 
        // when order is descending this condition will be evaluated
        else if (order == "desc" && (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase())) {
          
            //if so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
          
        }
      }
      
      if (shouldSwitch) {
        /*If a shouldSwitch is true, make the switch and mark that a switch has been done:*/
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]); //this will insert the next rows to the location of current row
        switching = true;
        //Each time a switch is done, increase this count by 1:
        switchcount ++;      
      } else {
        /*If no switching has been done AND the direction is "asc",
        set the direction to "desc" and run the while loop again.*/
        if (switchcount == 0 && order == "asc") {
          order = "desc";
          switching = true;
        }
      }
    }
  }