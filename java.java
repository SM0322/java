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

// 演算子
public class hello {

  public static void main(String []args) {
    int a;
    a = 100;
    a++;
    System.out.println(a);
  }
}

// a=61 b=60となる。bはbに50＋された値が表示され、そのあと１＋されるという順になってるから
public class hello {

  public static void main(String []args) {
    int a = 10;
    int b = 10;
    System.out.println(++a + 50);
    System.out.println(b++ + 50);
  }
}

// 型の自動変換
public class hello {

  public static void main(String []args) {
    double d = 8.5 / 2;
    long l = 5 + 2L;
    System.out.println(d);
    System.out.println(l);
  }
}
// 23がstringかたint形に自動変換されてる
public class hello {

  public static void main(String []args) {
    String mag = "私の年齢は" + 23;
    System.out.println(mag);
  }
}
// printのみで()内を表示,printlnと違い開業しないので連続させると文がつながる
public class hello {

  public static void main(String []args) {
    String name = "私の年齢は";
    String message = "23歳です";
    System.out.print(name);
    System.out.print(message);
  }
}
// Math.max()で大きい方の数字を代入
public class hello {

  public static void main(String []args) {
    int a = 5;
    int b = 3;
    int m = Math.max(a, b);
    System.out.println(m);
  }
}
// Integer.parseInt()で整数として読める文字列をinteger型に変換
public class hello {

  public static void main(String []args) {
    String age = "31";
    int n = Integer.parseInt(age);
    System.out.println("穴阿多は来年" + (n + 1) +"際になるね");
  }
}
// 乱数生成()数字が上限
public class hello {

  public static void main(String []args) {
    int r = new java.util.Random().nextInt(90);
    System.out.println(r);
  }
}
// ターミナル上で文字列と整数の入力を受け付ける
public class hello {

  public static void main(String []args) {
    String name = new java.util.Scanner(System.in).nextLine();
    int age = new java.util.Scanner(System.in).nextInt();
    System.out.println(name + age);
  }
}