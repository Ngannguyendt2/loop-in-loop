function maketable() {
    let line;
    let i=1,j=1;
    line="<table border='1' width='300' cellspacing='0'>";
    while(i<10)
    {
        line=line+"<tr>";
        while (j<10)
        {
            line=line+"<td>"+i*j+"</td>";
           j++;
        }

        line=line+"</tr>";
        i++;
        j=1;
    }
    line=line+"</table>";
    document.write(line);

}