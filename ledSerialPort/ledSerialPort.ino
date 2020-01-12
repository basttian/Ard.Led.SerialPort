int VERDE = 13;
int estado = 0;

void setup() {
  Serial.begin(9600);
  pinMode(VERDE, OUTPUT);
}
void loop() {
   if(Serial.available() > 0){
   estado = Serial.read();
   Serial.flush();
   switch(estado){
      case 'e':
      digitalWrite(VERDE, HIGH);
      Serial.println(estado);
    break;
      case 'a':
      digitalWrite(VERDE, LOW);
      Serial.println(estado);
    break;
    }
   }
}
