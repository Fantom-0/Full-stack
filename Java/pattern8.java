public class pattern8 {
    
    public static void main(String[] args) {
        
        int total = 2333;

        for (int i = 0; i < total; i++) {
            
            for(int j= 0; j < i; j++)
            {
                System.out.print(j);
            }
            System.out.println();
        }
    }
}
