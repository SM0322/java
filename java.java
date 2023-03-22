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

public class hello {

  public static void main(String []args) {
    String name = new java.util.Scanner(System.in).nextLine();
    int x = 5;
    int y = 10;
    String ans = "x+yは" + (x + y);
    System.out.println(ans);}
}
// 占いゲーム
public class hello {

  public static void main(String []args) {
    String welcome = "ようこそ占いの館へ";
    System.out.println(welcome);
    String nameInput = "あなたの名前を入力してください";
    System.out.println(nameInput);
    String name = new java.util.Scanner(System.in).nextLine();
    String ageInput = "あなたの年齢を入力してください";
    System.out.println(ageInput);
    String ageString = new java.util.Scanner(System.in).nextLine();
    int age = Integer.parseInt(ageString);
    int fortune = new java.util.Random().nextInt(3);
    fortune++;
    String resultOutput = "占い結果が出ました";
    System.out.println(resultOutput);
    System.out.println(age + "歳の" + name + "さん、あなたの運記番号は" + fortune + "です");
    System.out.println(1 + ":大吉 " + 2 + ":中吉 " + 3 + ":小吉 " + 4 + ":凶");
  }
}

// if文
public class hello {

  public static void main(String []args) {
    boolean tenki = true;
    if (tenki == true) {
      System.out.println("選択");
      System.out.println("散歩");
    } else {
      System.out.println("DVD");
    }
  }
}
// ループ文
public class hello {

  public static void main(String []args) {
    boolean doorclose = true;
    while (doorclose == true) {
      System.out.println("ノックする");
      System.out.println("１分待つ");
    }
  }
}
// ブロックの中身が１行なら{}は省略可だがお勧めしない
public class hello {

  public static void main(String []args) {
    boolean tenki = true;
    if (tenki == true) {
      System.out.println("選択");
      System.out.println("散歩");
    } else
      System.out.println("DVD");
  }
}
// if elseがクドイかつ条件式の形式が一緒ならswitchが使える
public class hello {

  public static void main(String []args) {
    System.out.println("あなたの運勢を占います");
    int fortune = 0;
    switch (fortune) {
      case 1:
        System.out.println("大吉");
        break;
      case 2:
        System.out.println("中吉");
        break;
      case 3:
        System.out.println("小吉");
        break;
        // default = 0
      default:
        System.out.println("凶");
    }
  }
}
// 乱数とswitchを活かしたおみくじ
public class hello {

  public static void main(String []args) {
    System.out.println("あなたの運勢を占います");
    int fortune = new java.util.Random().nextInt(4);
    switch (fortune) {
      case 1:
        System.out.println("大吉");
        break;
      case 2:
        System.out.println("中吉");
        break;
      case 3:
        System.out.println("小吉");
        break;
        // default = 0
      case 0:
        System.out.println("凶");
    }
  }
}
// do-while(最低１回はアクションする)
public class hello {

  public static void main(String []args) {
    int temp = 25;
    do {
      temp--;
      System.out.println("温度を１度下げました" + temp);
    } while (temp > 25);
  }
}
// 1回もループしない場合あり
public class hello {

  public static void main(String []args) {
    int temp = 25;
    while (temp > 25) {
      temp--;
      System.out.println("温度を１度下げました" + temp);
    } 
  }
}
// for文
public class hello {
  public static void main(String []args) {
    for (int i = 0; i < 10; i++) {
      System.out.println(i);
    }
  }
}
// 九九の計算
public class hello {
  public static void main(String []args) {
    for (int i = 1; i < 10; i++) {
      for (int j = 1; j < 10; j++) {
        System.out.println(i * j);
        System.out.println(" ");
      }
    System.out.println("");  
    }
  }
}
// breakで繰り返しをすぐに中断
public class hello {
  public static void main(String []args) {
    for (int i = 1; i < 10; i++) {
      if (i == 3) {
        break;
      }
      System.out.println(i);
    }
  }
}
// continueでその集会のみスキップ
public class hello {
  public static void main(String []args) {
    for (int i = 1; i < 10; i++) {
      if (i == 3) {
        continue;
      }
      System.out.println(i);
    }
  }
}
// 3-3
public class hello {

  public static void main(String []args) {
    int isHungry = 1;
    String food = "カレー";
    System.out.println("こんにちは");
    if (isHungry == 0) {
      System.out.println("おなかがいっぱいです");
    } else {
      System.out.println("腹ペコです");
      System.out.println(food + "をいただきます");
    }
    System.out.println("ごちそうさまでした");
  }
}
// 3-4
public class hello {
  public static void main(String []args) {
    boolean tenki =true;
    if (tenki == true) {
      System.out.println("洗濯");
      System.out.println("散歩");
    } else {
      System.out.println("DVD");
      System.out.println("寝る");
    }
  }
}
// 3-5
public class hello {
  public static void main(String []args) {
    System.out.print("[メニュ-] 1:検索 2:登録 3:削除 4:変更");
    int selected = new java.util.Scanner(System.in).nextInt();
    switch (selected) {
      case 1:
        System.out.println("検索します");
        break;
      case 2:
        System.out.println("登録します");
        break;
      case 3:
        System.out.println("削除します");
        break;
      case 4:
        System.out.println("変更します");
        break;
    }
  }
}
// 3-6
public class hello {
  public static void main(String []args) {
    System.out.print("[数当てゲーム]");
    int ans = new java.util.Random().nextInt(1);
    for (int i = 0; i < 5; i++) {
      System.out.println("0~9の数字を入力してください");
      int num = new java.util.Scanner(System.in).nextInt();
      if (num == ans) {
        System.out.println("アタリ！");
        break;
      } else {
        System.out.println("ハズレ！");
      }
    }
    System.out.println("ゲームを終了します");
  }
}
// 平均点
public class hello {
  public static void main(String []args) {
    int sansu = 20;
    int kokugo = 30;
    int rika = 40;
    int eigo = 80;
    int syakai = 50;
    
    int sum = sansu + kokugo + rika + eigo + syakai;
    int average = sum / 5;
    System.out.println(sum);
    System.out.println(average);
  }
}
// 配列の宣言
public class hello {
  public static void main(String []args) {
    int sansu = 20;
    int kokugo = 30;
    int rika = 40;
    int eigo = 80;
    int syakai = 50;
    int [] scores = new int[5];
    int num = scores.length;
    
    int sum = sansu + kokugo + rika + eigo + syakai;
    int average = sum / 5;
    System.out.println(sum);
    System.out.println(average);
    System.out.println(num);
  }
}
// 配列に数値を入力
public class hello {
  public static void main(String []args) {
    int [] scores = new int[] {20, 30, 40, 50, 80};
    int num = scores.length;
    System.out.println(scores[3]);
    System.out.println(num);
  }
}