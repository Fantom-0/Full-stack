
import java.util.Scanner;

public class marks {
    
    public static void main(String[]args)
    {
        @SuppressWarnings("resource")
        Scanner obj=new Scanner(System.in);

        System.out.println("enter either 1 or 0");
        int conf=obj.nextInt();

        if(conf==1)
        {
            do{
                System.out.println("enter your marks");
                int marks=obj.nextInt();
                if(marks>=90&&marks<=100)
                {
                    System.out.println("great!");
                }
                else if(marks<90&&marks>=60)
                {
                    System.out.println("good!");
                }
                else if(marks<60&&marks>=0)
                {
                    System.out.println("not bad try again!");
                }
                else if(marks<100||marks>0)
                {
                    System.err.println("wrong input");
                }
                System.out.println("1 to rerun 0 to exit");
                conf=obj.nextInt();
            }while(conf!=0);
        }
    }
}
