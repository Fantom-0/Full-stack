import java.util.Scanner;

public class cond {
    
    public static void main(String[] args)
    {
        
        @SuppressWarnings("resource")
        Scanner obj=new Scanner(System.in);
        
        System.out.println("enter the first number");
        int x = obj.nextInt();

        System.out.println("enter the second number");
        int y = obj.nextInt();

        if (x > y)
        {
            System.out.println(x+" is greater than "+y);
        }
        else
        {
            System.out.println(y+" is greater than "+x);
        }
    }
}
