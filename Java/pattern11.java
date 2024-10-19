public class pattern11 {
    
    public static void main(String[] args) {
        {
            int n = 2;
            int m = 2;

            for(int i = n; i >= 1; i-- )
            {
                for (int j = 1; j <= i; j++ )
                {
                    System.out.print("  ");
                }

           
            {
                
                for( int j = 1; j <= m; j++)
                {
                    System.out.print("@"+" ");
                }

                for(int k = 1; k <= m; k++ )
           {
               if(k >= 2)
               System.out.print("@"+" ");
           }
               
                System.out.println();
                m++;
            }
           }
    }
    }
}
