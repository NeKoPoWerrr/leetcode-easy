/*

char * removeOuterParentheses(char * S){
    int count = 0;
    int n = 0;
    char *J = malloc(10000 * sizeof(char));
    for (int i = 1;i < strlen(S);i++){
       if(S[i] == '('){
          count++; 
       }        
       if(S[i] == ')'){
          count--;
       }
        if(count >= 0) {J[n++] = S[i];
        }else{
            count = 0;
            i++;
        }
    J[n] = '\0';
    }
    return J;
}
*/
