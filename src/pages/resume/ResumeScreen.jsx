import {
  ButtonSave,
  ButtonSaveFormation,
  Container,
  ContainerPersonalData,
  Content,
  ContentInfo,
  ContentResume,
  FormationContainer,
  Header,
  ResumeAddress,
  ResumeComunication,
  ResumeEmail,
  ResumeFirstName,
  ResumeImage,
  ResumeInfos,
  ResumeLastName,
  ResumeLeft,
  ResumeName,
  ResumeOffice,
  ResumePhone,
  ResumeProfile,
  ResumeRight,
  ResumeTop,
  ViewResume,
} from "./styles";

import { MdEmail, MdLocationOn } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import {
  IoIosAddCircleOutline,
  IoIosRemoveCircleOutline,
} from "react-icons/io";
import { useState } from "react";
import { api } from "../../services/api";
import { useAuth } from "../../context/auth";

export default function ResumeScreen() {
  const { user } = useAuth();
  const { idResume, setIdResume } = useAuth();

  const [resume, setResume] = useState({
    title: "",
    firstName: "",
    lastName: "",
    picture: "",
    office: "",
    email: "",
    numberPhone: "",
    address: "",
    postalCode: "",
    city: "",
  });
  const [formationData, setFormationData] = useState({
    formation: "",
    institution: "",
    city: "",
    monthStart: "",
    yearStart: "",
    monthEnd: "",
    yearEnd: "",
    description: "",
    personalDataId: null,
  });
  const [experienceData, setExperienceData] = useState({
    ocuppation: "",
    company: "",
    city: "",
    monthStart: "",
    yearStart: "",
    monthEnd: "",
    yearEnd: "",
    description: "",
  });
  const [skillData, setSkillData] = useState({
    skill: "",
  });
  const [languageData, setLanguageData] = useState({
    language: "",
  });
  const [personalData, setPersonalData] = useState(false);
  const [formation, setFormation] = useState(false);
  const [experience, setExperience] = useState(false);
  const [skill, setSkill] = useState(false);
  const [language, setLanguage] = useState(false);
  function showOrHidePersonalData() {
    setPersonalData(!personalData);
  }
  function showOrHideFormation() {
    setFormation(!formation);
  }
  function showOrHideExperience() {
    setExperience(!experience);
  }
  function showOrHideSkill() {
    setSkill(!skill);
  }
  function showOrHideLanguage() {
    setLanguage(!language);
  }
  function changeInput(e) {
    setResume({ ...resume, [e.target.name]: e.target.value });
    setExperienceData({ ...experienceData, [e.target.name]: e.target.value });

    setSkillData({ ...skillData, [e.target.name]: e.target.value });
    setLanguageData({ ...languageData, [e.target.name]: e.target.value });
  }

  function changeInputFormation(e) {
    setFormationData({ ...formationData, [e.target.name]: e.target.value });
  }

  function savePersonalData(e) {
    e.preventDefault();
    api
      .post(
        "resume/create",
        { ...resume },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      )
      .then((res) => {
        setIdResume(res.data.idResume);
        setPersonalData(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function updatePersonalData(e) {
    e.preventDefault();
    alert("update");
  }

  function saveFormation(e) {
    e.preventDefault();
    api
      .post(
        "formation/create",
        { ...formationData, personalDataId: idResume },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      )
      .then((res) => {
        setFormation(false);
      })
      .catch((err) => {
        console.log(idResume);
        console.log(typeof idResume);
        console.log(err);
      });
  }

  return (
    <Container>
      <Header></Header>
      <ContentResume>
        <Content>
          {personalData ? (
            <ContainerPersonalData id="select">
              <p>
                Dados Pessoais{" "}
                <IoIosRemoveCircleOutline
                  onClick={showOrHidePersonalData}
                  className="icon"
                />
              </p>
              <input
                type="text"
                placeholder="Título"
                value={resume.title}
                name="title"
                onChange={changeInput}
              />
              <input
                type="text"
                placeholder="Primeiro Nome"
                value={resume.firstName}
                name="firstName"
                onChange={changeInput}
              />
              <input
                type="text"
                placeholder="Sobrenome"
                value={resume.lastName}
                name="lastName"
                onChange={changeInput}
              />
              <input
                type="text"
                placeholder="Imagem"
                value={resume.picture}
                name="picture"
                onChange={changeInput}
              />
              <input
                type="text"
                placeholder="Cargo"
                value={resume.office}
                name="office"
                onChange={changeInput}
              />
              <input
                type="text"
                placeholder="Email"
                value={resume.email}
                name="email"
                onChange={changeInput}
              />
              <input
                type="text"
                placeholder="Telefone"
                value={resume.numberPhone}
                name="numberPhone"
                onChange={changeInput}
              />
              <input
                type="text"
                placeholder="Endereço"
                value={resume.address}
                name="address"
                onChange={changeInput}
              />
              <input
                type="text"
                placeholder="CEP/Código Postal"
                value={resume.postalCode}
                name="postalCode"
                onChange={changeInput}
              />
              <input
                type="text"
                placeholder="Cidade"
                value={resume.city}
                name="city"
                onChange={changeInput}
              />
              {idResume ? (
                <ButtonSave onClick={updatePersonalData}>Atualizar</ButtonSave>
              ) : (
                <ButtonSave onClick={savePersonalData}>Salvar</ButtonSave>
              )}
            </ContainerPersonalData>
          ) : (
            <ContainerPersonalData>
              <p>
                Dados Pessoais{" "}
                <IoIosAddCircleOutline
                  onClick={showOrHidePersonalData}
                  className="icon"
                />
              </p>
            </ContainerPersonalData>
          )}
          {formation ? (
            <ContainerPersonalData>
              <p>
                Formação
                <IoIosRemoveCircleOutline
                  onClick={showOrHideFormation}
                  className="icon"
                />
              </p>
              <input
                type="text"
                placeholder="Formação"
                value={formationData.formation}
                name="formation"
                onChange={changeInputFormation}
              />
              <input
                type="text"
                placeholder="Instituição"
                value={formationData.institution}
                name="institution"
                onChange={changeInputFormation}
              />
              <input
                type="text"
                placeholder="Cidade"
                value={formationData.city}
                name="city"
                onChange={changeInputFormation}
              />
              <div>
                <span>
                  <p>Data de início</p>
                  <input
                    className="date"
                    type="text"
                    placeholder="Mês"
                    value={formationData.monthStart}
                    name="monthStart"
                    onChange={changeInputFormation}
                  />
                  <input
                    className="date"
                    type="text"
                    placeholder="Ano"
                    value={formationData.yearStart}
                    name="yearStart"
                    onChange={changeInputFormation}
                  />
                </span>

                <span>
                  <p>Data de término</p>
                  <input
                    className="date"
                    type="text"
                    placeholder="Mês"
                    value={formationData.monthEnd}
                    name="monthEnd"
                    onChange={changeInputFormation}
                  />
                  <input
                    className="date"
                    type="text"
                    placeholder="Ano"
                    value={formationData.yearEnd}
                    name="yearEnd"
                    onChange={changeInputFormation}
                  />
                </span>
              </div>
              <input
                type="text"
                placeholder="Descrição"
                value={formationData.description}
                name="description"
                onChange={changeInputFormation}
              />
              <ButtonSaveFormation onClick={saveFormation}>
                Adicionar
              </ButtonSaveFormation>
            </ContainerPersonalData>
          ) : (
            <ContainerPersonalData>
              <p>
                Formação
                <IoIosAddCircleOutline
                  onClick={showOrHideFormation}
                  className="icon"
                />
              </p>
            </ContainerPersonalData>
          )}
          {experience ? (
            <ContainerPersonalData>
              <p>
                Experiência
                <IoIosRemoveCircleOutline
                  onClick={showOrHideExperience}
                  className="icon"
                />
              </p>
              <input
                type="text"
                placeholder="Ocupação"
                value={experienceData.ocuppation}
                name="occupation"
                onChange={changeInput}
              />
              <input
                type="text"
                placeholder="Empresa"
                value={experienceData.company}
                name="company"
                onChange={changeInput}
              />
              <input
                type="text"
                placeholder="Cidade"
                value={experienceData.city}
                name="cityExperience"
                onChange={changeInput}
              />
              <div>
                <span>
                  <p>Data de início</p>
                  <input
                    className="date"
                    type="text"
                    placeholder="Mês"
                    value={experienceData.monthStart}
                    name="monthStartExperience"
                    onChange={changeInput}
                  />
                  <input
                    className="date"
                    type="text"
                    placeholder="Ano"
                    value={experienceData.yearStart}
                    name="yearStartExperience"
                    onChange={changeInput}
                  />
                </span>

                <span>
                  <p>Data de término</p>
                  <input
                    className="date"
                    type="text"
                    placeholder="Mês"
                    value={experienceData.monthEnd}
                    name="monthEndExperience"
                    onChange={changeInput}
                  />
                  <input
                    className="date"
                    type="text"
                    placeholder="Ano"
                    value={experienceData.yearEnd}
                    name="yearEndExperience"
                    onChange={changeInput}
                  />
                </span>
              </div>
              <input
                type="text"
                placeholder="Descrição"
                value={experienceData.description}
                name="descriptionExperience"
                onChange={changeInput}
              />
              <ButtonSaveFormation>Adicionar</ButtonSaveFormation>
            </ContainerPersonalData>
          ) : (
            <ContainerPersonalData>
              <p>
                Experiência
                <IoIosAddCircleOutline
                  onClick={showOrHideExperience}
                  className="icon"
                />
              </p>
            </ContainerPersonalData>
          )}
          {skill ? (
            <ContainerPersonalData>
              <p>
                Habilidade
                <IoIosRemoveCircleOutline
                  onClick={showOrHideSkill}
                  className="icon"
                />
              </p>
              <input
                type="text"
                placeholder="Habilidade"
                value={skillData.skill}
                name="skill"
                onChange={changeInput}
              />
              <ButtonSaveFormation>Adicionar</ButtonSaveFormation>
            </ContainerPersonalData>
          ) : (
            <ContainerPersonalData>
              <p>
                Habilidade
                <IoIosAddCircleOutline
                  onClick={showOrHideSkill}
                  className="icon"
                />
              </p>
            </ContainerPersonalData>
          )}
          {language ? (
            <ContainerPersonalData>
              <p>
                Idioma
                <IoIosRemoveCircleOutline
                  onClick={showOrHideLanguage}
                  className="icon"
                />
              </p>
              <input
                type="text"
                placeholder="Idioma"
                value={languageData.language}
                name="language"
                onChange={changeInput}
              />
              <ButtonSaveFormation>Adicionar</ButtonSaveFormation>
            </ContainerPersonalData>
          ) : (
            <ContainerPersonalData>
              <p>
                Idioma
                <IoIosAddCircleOutline
                  onClick={showOrHideLanguage}
                  className="icon"
                />
              </p>
            </ContainerPersonalData>
          )}
        </Content>
        <ViewResume>
          <ResumeTop>
            <ResumeImage src={resume.picture} />
            <ResumeProfile>
              <ResumeName>
                <ResumeFirstName>{resume.firstName}</ResumeFirstName>
                <ResumeLastName>{resume.lastName}</ResumeLastName>
              </ResumeName>
              <ResumeOffice>{resume.office}</ResumeOffice>
              <ResumeInfos>
                <ResumeAddress>
                  <ResumeComunication>
                    <ResumeEmail>
                      <MdEmail className="icon" />
                      {resume.email}
                    </ResumeEmail>
                    <ResumePhone>
                      <FaPhoneAlt className="icon" />
                      {resume.numberPhone}
                    </ResumePhone>
                  </ResumeComunication>
                  <div>
                    <MdLocationOn className="icon" />
                    <p>{resume.address}</p>
                    <p>{resume.postalCode}</p>
                    <p>{resume.city}</p>
                  </div>
                </ResumeAddress>
              </ResumeInfos>
            </ResumeProfile>
          </ResumeTop>
          <ContentInfo>
            <ResumeLeft>
              {formation ? (
                <FormationContainer>
                  <h2>Formação</h2>
                  <div>
                    <div>
                      <p className="formation">{formationData.formation}</p>
                      <main>
                        <p className="institution">
                          {formationData.institution}
                        </p>
                        <p className="city-formation">{formationData.city}</p>
                      </main>
                    </div>
                    <p className="date">
                      {formationData.monthStart}/{formationData.yearStart} -{" "}
                      {formationData.monthEnd}/{formationData.yearEnd}
                    </p>
                    <p className="description">{formationData.description}</p>
                  </div>
                </FormationContainer>
              ) : null}
              {experience ? (
                <FormationContainer>
                  <h2>Experiência</h2>
                  <div>
                    <div>
                      <p className="ocuppacion">{experienceData.ocuppation}</p>
                      <p className="company">{experienceData.company}</p>
                      <p className="city-experience">{experienceData.city}</p>
                      <p className="description">
                        {experienceData.description}
                      </p>
                    </div>
                    <p className="date">
                      {experienceData.monthStart}
                      {experienceData.yearStart}
                      {experienceData.monthEnd}
                      {experienceData.yearEnd}
                    </p>
                  </div>
                </FormationContainer>
              ) : null}
            </ResumeLeft>
            <ResumeRight>
              {skill ? (
                <FormationContainer>
                  <h2>Habilidade</h2>
                  <p>{skillData.skill}</p>
                </FormationContainer>
              ) : null}
              {language ? (
                <FormationContainer>
                  <h2>Idioma</h2>
                  <p>{languageData.language}</p>
                </FormationContainer>
              ) : null}
            </ResumeRight>
          </ContentInfo>
        </ViewResume>
      </ContentResume>
    </Container>
  );
}

// <Content>
//           {personalData ? (
//             <ContainerPersonalData id="select">
//               <p>
//                 Dados Pessoais{" "}
//                 <IoIosRemoveCircleOutline
//                   onClick={showOrHidePersonalData}
//                   className="icon"
//                 />
//               </p>
//               <input
//                 type="text"
//                 placeholder="Título"
//                 value={resume.title}
//                 name="title"
//                 onChange={changeInput}
//               />
//               <input
//                 type="text"
//                 placeholder="Primeiro Nome"
//                 value={resume.firstName}
//                 name="firstName"
//                 onChange={changeInput}
//               />
//               <input
//                 type="text"
//                 placeholder="Sobrenome"
//                 value={resume.lastName}
//                 name="lastName"
//                 onChange={changeInput}
//               />
//               <input
//                 type="text"
//                 placeholder="Imagem"
//                 value={resume.picture}
//                 name="picture"
//                 onChange={changeInput}
//               />
//               <input
//                 type="text"
//                 placeholder="Cargo"
//                 value={resume.office}
//                 name="office"
//                 onChange={changeInput}
//               />
//               <input
//                 type="text"
//                 placeholder="Email"
//                 value={resume.email}
//                 name="email"
//                 onChange={changeInput}
//               />
//               <input
//                 type="text"
//                 placeholder="Telefone"
//                 value={resume.numberPhone}
//                 name="numberPhone"
//                 onChange={changeInput}
//               />
//               <input
//                 type="text"
//                 placeholder="Endereço"
//                 value={resume.address}
//                 name="address"
//                 onChange={changeInput}
//               />
//               <input
//                 type="text"
//                 placeholder="CEP/Código Postal"
//                 value={resume.postalCode}
//                 name="postalCode"
//                 onChange={changeInput}
//               />
//               <input
//                 type="text"
//                 placeholder="Cidade"
//                 value={resume.city}
//                 name="city"
//                 onChange={changeInput}
//               />
//               {idResume ? (
//                 <ButtonSave onClick={updatePersonalData}>Atualizar</ButtonSave>
//               ) : (
//                 <ButtonSave onClick={savePersonalData}>Salvar</ButtonSave>
//               )}
//             </ContainerPersonalData>
//           ) : (
//             <ContainerPersonalData>
//               <p>
//                 Dados Pessoais{" "}
//                 <IoIosAddCircleOutline
//                   onClick={showOrHidePersonalData}
//                   className="icon"
//                 />
//               </p>
//             </ContainerPersonalData>
//           )}
//           {formation ? (
//             <ContainerPersonalData>
//               <p>
//                 Formação
//                 <IoIosRemoveCircleOutline
//                   onClick={showOrHideFormation}
//                   className="icon"
//                 />
//               </p>
//               <input
//                 type="text"
//                 placeholder="Formação"
//                 value={formationData.formation}
//                 name="formation"
//                 onChange={changeInput}
//               />
//               <input
//                 type="text"
//                 placeholder="Instituição"
//                 value={formationData.institution}
//                 name="institution"
//                 onChange={changeInput}
//               />
//               <input
//                 type="text"
//                 placeholder="Cidade"
//                 value={formationData.cityFormation}
//                 name="cityFormation"
//                 onChange={changeInput}
//               />
//               <div>
//                 <span>
//                   <p>Data de início</p>
//                   <input
//                     className="date"
//                     type="text"
//                     placeholder="Mês"
//                     value={formationData.monthStart}
//                     name="monthStart"
//                     onChange={changeInput}
//                   />
//                   <input
//                     className="date"
//                     type="text"
//                     placeholder="Ano"
//                     value={formationData.yearStart}
//                     name="yearStart"
//                     onChange={changeInput}
//                   />
//                 </span>

//                 <span>
//                   <p>Data de término</p>
//                   <input
//                     className="date"
//                     type="text"
//                     placeholder="Mês"
//                     value={formationData.monthEnd}
//                     name="monthEnd"
//                     onChange={changeInput}
//                   />
//                   <input
//                     className="date"
//                     type="text"
//                     placeholder="Ano"
//                     value={formationData.yearEnd}
//                     name="yearEnd"
//                     onChange={changeInput}
//                   />
//                 </span>
//               </div>
//               <input
//                 type="text"
//                 placeholder="Descrição"
//                 value={formationData.description}
//                 name="description"
//                 onChange={changeInput}
//               />
//               <ButtonSaveFormation>Adicionar</ButtonSaveFormation>
//             </ContainerPersonalData>
//           ) : (
//             <ContainerPersonalData>
//               <p>
//                 Formação
//                 {idResume ? (
//                   <IoIosAddCircleOutline
//                     onClick={showOrHideFormation}
//                     className="icon"
//                   />
//                 ) : null}
//               </p>
//             </ContainerPersonalData>
//           )}
//           {experience ? (
//             <ContainerPersonalData>
//               <p>
//                 Experiência
//                 <IoIosRemoveCircleOutline
//                   onClick={showOrHideExperience}
//                   className="icon"
//                 />
//               </p>
//               <input
//                 type="text"
//                 placeholder="Ocupação"
//                 value={experienceData.ocuppation}
//                 name="occupation"
//                 onChange={changeInput}
//               />
//               <input
//                 type="text"
//                 placeholder="Empresa"
//                 value={experienceData.company}
//                 name="company"
//                 onChange={changeInput}
//               />
//               <input
//                 type="text"
//                 placeholder="Cidade"
//                 value={experienceData.city}
//                 name="cityExperience"
//                 onChange={changeInput}
//               />
//               <div>
//                 <span>
//                   <p>Data de início</p>
//                   <input
//                     className="date"
//                     type="text"
//                     placeholder="Mês"
//                     value={experienceData.monthStart}
//                     name="monthStartExperience"
//                     onChange={changeInput}
//                   />
//                   <input
//                     className="date"
//                     type="text"
//                     placeholder="Ano"
//                     value={experienceData.yearStart}
//                     name="yearStartExperience"
//                     onChange={changeInput}
//                   />
//                 </span>

//                 <span>
//                   <p>Data de término</p>
//                   <input
//                     className="date"
//                     type="text"
//                     placeholder="Mês"
//                     value={experienceData.monthEnd}
//                     name="monthEndExperience"
//                     onChange={changeInput}
//                   />
//                   <input
//                     className="date"
//                     type="text"
//                     placeholder="Ano"
//                     value={experienceData.yearEnd}
//                     name="yearEndExperience"
//                     onChange={changeInput}
//                   />
//                 </span>
//               </div>
//               <input
//                 type="text"
//                 placeholder="Descrição"
//                 value={experienceData.description}
//                 name="descriptionExperience"
//                 onChange={changeInput}
//               />
//               <ButtonSaveFormation>Adicionar</ButtonSaveFormation>
//             </ContainerPersonalData>
//           ) : (
//             <ContainerPersonalData>
//               <p>
//                 Experiência
//                 {idResume ? (
//                   <IoIosAddCircleOutline
//                     onClick={showOrHideExperience}
//                     className="icon"
//                   />
//                 ) : null}
//               </p>
//             </ContainerPersonalData>
//           )}
//           {skill ? (
//             <ContainerPersonalData>
//               <p>
//                 Habilidade
//                 <IoIosRemoveCircleOutline
//                   onClick={showOrHideSkill}
//                   className="icon"
//                 />
//               </p>
//               <input
//                 type="text"
//                 placeholder="Habilidade"
//                 value={skillData.skill}
//                 name="skill"
//                 onChange={changeInput}
//               />
//               <ButtonSaveFormation>Adicionar</ButtonSaveFormation>
//             </ContainerPersonalData>
//           ) : (
//             <ContainerPersonalData>
//               <p>
//                 Habilidade
//                 {idResume ? (
//                   <IoIosAddCircleOutline
//                     onClick={showOrHideSkill}
//                     className="icon"
//                   />
//                 ) : null}
//               </p>
//             </ContainerPersonalData>
//           )}
//           {language ? (
//             <ContainerPersonalData>
//               <p>
//                 Idioma
//                 <IoIosRemoveCircleOutline
//                   onClick={showOrHideLanguage}
//                   className="icon"
//                 />
//               </p>
//               <input
//                 type="text"
//                 placeholder="Idioma"
//                 value={languageData.language}
//                 name="language"
//                 onChange={changeInput}
//               />
//               <ButtonSaveFormation>Adicionar</ButtonSaveFormation>
//             </ContainerPersonalData>
//           ) : (
//             <ContainerPersonalData>
//               <p>
//                 Idioma
//                 {idResume ? (
//                   <IoIosAddCircleOutline
//                     onClick={showOrHideLanguage}
//                     className="icon"
//                   />
//                 ) : null}
//               </p>
//             </ContainerPersonalData>
//           )}
//         </Content>
