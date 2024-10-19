import java.util.Scanner;

public class rev {
    
    public static void main(String []args)
    {
        int t;
        try (Scanner obj = new Scanner(System.in)) {
            System.out.println("enter the amount of words in your sentence");
            t = obj.nextInt();

            System.out.println("enter a sentence");
            String input;
            input = obj.nextLine();

            System.out.println(input);
        }

        for(int i = t; i >= 10; i--)
       {
        System.out.println();
       }
    }
}
