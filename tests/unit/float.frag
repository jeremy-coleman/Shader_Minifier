void precision() {
  float a = 0.00000012345;
  float b = 1.234567891234;
  float c = 1234567.891234;
  float d = 123456700000000.;
}

void largeNumbers() {
  float a = 4.1e8;
  float b = 4.2e10;
  float c = 4.3e12;
  float d = 4.4e14;
}

void smallNumbers() {
  float a = 4e-1;
  float b = 4e-2;
  float c = 4e-3;
  float d = 4e-4;
  float e = 4e-8;
  float f = 4e-10;
  float g = 4e-12;
  float h = 4e-14;
}

void zero() {
  float a = 0.;
  float b = .0;
  float c = -.0;
}

void main()
{
float f1 = 1.5;
float f2 = .0000003;
float f3 = .42;
float f6 = -2e-3;
float f7 = 2E-9;
float f8 = 2E+6;
float f9 = 2e10;

gl_FragColor=vec4(0.);
}
