public class rhombus {


    public static void main(String[] args) {
        
        int x = 7;

        for( int i = x; i >= 0; i-- )
        {
            for( int j = 1; j <=i; j++)
            {
                System.out.print(" ");
            }

            for( int k = 1; k <= x; k++)
            {
                System.out.print("@ ");
            }
            System.out.println("");
        }

    }
}