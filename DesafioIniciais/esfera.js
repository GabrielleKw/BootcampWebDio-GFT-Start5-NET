using System;

namespace DIO
{
  class Esfera
  {
    static void Main(string[] args)
    {
      double a = Convert.ToDouble(Console.ReadLine());
      
      Console.WriteLine("VOLUME = " + string.Format("{0:0.000}", ((4 / 3.0) * 3.14159 * a * a * a)));
      Console.ReadLine();
    }
  }
}
