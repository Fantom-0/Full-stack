public class pal {
    public static void main(String[] args)
    {
        int i, j;

        int num = 5;

        for(i = 1; i <= num ; i++)
        {
            for(j = 1; j <= i; j++)
            {
                System.out.print( j + " ");
            }
            System.out.println();
        }
    }
    
}
