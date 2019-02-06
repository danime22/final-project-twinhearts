<Form onSubmit={this.handleSubmit}>

<FormGroup>
    <Label for="exampleName">Name</Label>
    <Input type="text" value={this.state.name} onChange={this.handleInputChange} name="name" id="exampleName" placeholder="with a placeholder" />
</FormGroup>
<FormGroup>
    <Label for="exampleEmail">Email</Label>
    <Input type="email" value={this.state.email} onChange={this.handleInputChange} name="email" id="exampleEmail" placeholder="with a placeholder" />
</FormGroup>
<FormGroup>
    <Label for="examplePassword">Password</Label>
    <Input type="password" value={this.state.password} onChange={this.handleInputChange} name="password" id="examplePassword" placeholder="password placeholder" />
</FormGroup>

<FormGroup>
    <Label for="exampleGender">Gender</Label>
    <Input type="text" value={this.state.gender} onChange={this.handleInputChange} name="gender" id="exampleGender" placeholder="with a placeholder" />
</FormGroup>

<FormGroup>
    <Label for="exampleZipCode">Zip Code</Label>
    <Input type="text" value={this.state.zipCode} onChange={this.handleInputChange} name="zipCode" id="exampleZipCode" placeholder="with a placeholder" />
</FormGroup>
<FormGroup>
    <Label for="exampleZipCode">Religion</Label>
    <Input type="text" value={this.state.zipCode} onChange={this.handleInputChange} name="zipCode" id="exampleZipCode" placeholder="with a placeholder" />
</FormGroup>
<FormGroup>
    <Label for="exampleZipCode">Hieght</Label>
    <Input type="text" value={this.state.zipCode} onChange={this.handleInputChange} name="zipCode" id="exampleZipCode" placeholder="with a placeholder" />
</FormGroup>
<FormGroup >
    <Label for="exampleText">About Me</Label>
     <Input type="textarea" name="text" id="exampleText" />
</FormGroup>
<FormGroup>
    <Label for="exampleSelect">Do you drinking?</Label>
    <Input type="select" name="select" id="exampleSelect">
             <option>select</option>
              <option>yes</option>
              <option>no</option>
            
   </Input>
</FormGroup>
<FormGroup>
    <Label for="exampleSelect">Do you smoke?</Label>
    <Input type="select" name="select" id="exampleSelect">
             <option>select</option>
              <option>yes</option>
              <option>no</option>
            
   </Input>
</FormGroup>
<FormGroup>
    <Label for="exampleSelect">Do you have pets?</Label>
    <Input type="select" name="select" id="exampleSelect">
             <option>select</option>
              <option>yes</option>
              <option>no</option>
            
   </Input>
</FormGroup>
<FormGroup>
    <Label for="exampleSelect">Do you have childern?</Label>
    <Input type="select" name="select" id="exampleSelect">
             <option>select</option>
              <option>yes</option>
              <option>no</option>
            
   </Input>
</FormGroup>
<FormGroup>
    <Label for="exampleSelect">Do you want Cildern?</Label>
    <Input type="select" name="select" id="exampleSelect">
             <option>select</option>
              <option>yes</option>
              <option>no</option>
              <option>maby someday</option>
            
   </Input>
</FormGroup>
<FormGroup>
    <Label for="exampleSelect">Do you like to travel?</Label>
    <Input type="select" name="select" id="exampleSelect">
             <option>select</option>
              <option>yes</option>
              <option>no</option>
            
   </Input>
</FormGroup>
<FormGroup>
    <Label for="exampleSelect">Would you relocate?</Label>
    <Input type="select" name="select" id="exampleSelect">
             <option>select</option>
              <option>yes</option>
              <option>no</option>
            
   </Input>
</FormGroup>
<FormGroup>
    <Label for="exampleSelect">What is your body type?</Label>
    <Input type="select" name="select" id="exampleSelect">
             <option>select</option>
              <option>heveyset</option>
              <option>slender</option>
              <option>avrige</option>
              <option>toned and fit </option>
              <option>patite</option>
              <option>curvy</option>
            
   </Input>
</FormGroup>
<FormGroup>
    <Label for="exampleSelect">What is your eating habbit?</Label>
    <Input type="select" name="select" id="exampleSelect">
             <option>select</option>
              <option>vegitarin</option>
              <option>veagin</option>
              <option>glutin free</option>
              <option>kosher</option>
              <option>nut free</option>
              <option>piky</option>
              
            
   </Input>
</FormGroup>


<button onClick={this.handleFormSubmit}>Submit</button>
</Form>