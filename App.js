import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Header, Content, Button, Text, Input, Label, Item, Form, Title, Body, Grid, Col, Card, CardItem } from 'native-base';

class App extends Component {

  constructor(){
    super();
    this.state = {
      result: null,
      tinggi: "",
      massa: ""
    }
  }

    cari = (massa, tinggi) => {
      var indeksmassatubuh = massa / (Math.pow(tinggi, 2)); // rumus mencari IMT = massa / tinggi^2
      var imt = indeksmassatubuh.toFixed(14)
      var diagnosa = "";

      if (imt < 18.5){
        diagnosa = 'BB Anda Kurang';
      }
      else if (imt >= 18.5 && imt <= 24.9){
        diagnosa = 'BB Anda Ideal';
      }
      else if (imt >=25.0 && imt <= 29.9){
        diagnosa = 'BB Anda Berlebih';
      }
      else if (imt >= 30.0 && imt <= 39.9){
        diagnosa = 'BB Anda Sangat Berlebih';
      }
      else{
        diagnosa = 'Obesitas';
      }
      
      return {imt, diagnosa}
    } 

  render(){
    
    return(
      <Container>
        <Header style={{backgroundColor: 'blue'}}>
          <Title style={{margin: 15}}>
            INDEX MASSA TUBUH
          </Title>
        </Header>
        <Content>
          <Form>
            <Grid>
              <Col style={{margin:15}}>
                <Item floatingLabel>
                  <Label>Massa (kg)</Label>
                  <Input
                  onChangeText={(x)=>{this.setState({massa: x})}}/>
                </Item>
              </Col>
              <Col style={{margin:15}}>
                <Item floatingLabel>
                  <Label>Tinggi (cm)</Label>
                  <Input
                  onChangeText={(x)=>{this.setState({tinggi: x/100})}}/>
                </Item>
              </Col>
            </Grid>
          </Form>

          <Button primary full style={{margin:15}}
          onPress={() => {
            this.setState({
              result: this.cari(this.state.massa, this.state.tinggi) 
            })
          }}>
            <Text>Hitung IMT</Text>
          </Button>
            
          
          {this.state.result ?
              <View style={{margin:10}}>
                <Grid>
                  <Col>
                    <Card>
                      <CardItem header>
                        <Text>Massa Tubuh:</Text>
                      </CardItem>
                      <CardItem>
                        <Body>
                          <Text>
                          {this.state.massa} kg
                          </Text>
                        </Body>
                      </CardItem>
                    </Card>
                  </Col>

                  <Col>
                    <Card>
                      <CardItem header>
                        <Text>Tinggi Badan:</Text>
                      </CardItem>
                      <CardItem>
                        <Body>
                          <Text>
                          {this.state.tinggi} m
                          </Text>
                        </Body>
                      </CardItem>
                    </Card>
                  </Col>
                </Grid>

                <Grid>
                  <Col>
                    <Card>
                      <CardItem header>
                        <Text>Indeks Massa Tubuh:</Text>
                      </CardItem>
                      <CardItem>
                        <Body>
                          <Text>
                          {this.state.result.imt}
                          </Text>
                        </Body>
                      </CardItem>
                    </Card>
                  </Col>

                  <Col>
                    <Card>
                      <CardItem header>
                        <Text>Diagnosa:</Text>
                      </CardItem>
                      <CardItem>
                        <Body>
                          <Text>
                          {this.state.result.diagnosa}
                          </Text>
                        </Body>
                      </CardItem>
                    </Card>
                  </Col>
                </Grid>
            </View>
            : null
          }
              
        </Content>
        
      </Container>
    )
  }
}

export default App;