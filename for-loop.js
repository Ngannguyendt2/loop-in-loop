function createtable(){
    let line;
    line="<table border='1' width='300' cellspacing='0'>"
    for(i=1;i<10;i++)
    {
        line=line+"<tr>";
        for(j=1;j<10;j++)
        {
            line=line+"<td>"+i*j+"</td>";
        }
        line=line+"</tr>";

    }
    document.write(line);
}
