// コマンド: java java 5 9
public class hello {

  public static void main(String []args) {
    System.out.println("Hello, World!");

    System.out.println("The sum of 2 and 3 is 5.");

    int sum = Integer.parseInt(args[0]) + Integer.parseInt(args[1]);

    System.out.format("The sum of %s and %s is %s.\n",
      args[0], args[1], Integer.toString(sum));
  }
}

// エスケープシーケンス
public class hello {

  public static void main(String []args) {
    System.out.println("私の好きな記号は(\")です");
  }
}