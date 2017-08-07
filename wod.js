function main(str) {
  var count =1;
   for(var i=0;i<str.length;i++){
      if(str[i]>='A'&&str[i]<='Z'){
         count++;
      }
    }
    document.write(count);
}
main("myNameIsAfiqKembarAndIAmFromJohor");
