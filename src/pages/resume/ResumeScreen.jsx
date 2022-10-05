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

export default function ResumeScreen() {
  const [resume, setResume] = useState({
    title: "",
    firstName: "",
    lastName: "",
    picture:
      "http://cbissn.ibict.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png",
    office: "",
    email: "",
    phone: "",
    address: "",
    postalCode: "",
    city: "",
  });
  const [formationData, setFormationData] = useState({
    formation: "",
    institution: "",
    cityFormation: "",
    monthStart: "",
    yearStart: "",
    monthEnd: "",
    yearEnd: "",
    description: "",
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
    setFormationData({ ...formationData, [e.target.name]: e.target.value });
    setExperienceData({ ...experienceData, [e.target.name]: e.target.value });
    setSkillData({ ...skillData, [e.target.name]: e.target.value });
    setLanguageData({ ...languageData, [e.target.name]: e.target.value });
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
                name="userImage"
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
                value={resume.phone}
                name="phone"
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
              <ButtonSave>Salvar</ButtonSave>
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
                onChange={changeInput}
              />
              <input
                type="text"
                placeholder="Instituição"
                value={formationData.institution}
                name="institution"
                onChange={changeInput}
              />
              <input
                type="text"
                placeholder="Cidade"
                value={formationData.cityFormation}
                name="cityFormation"
                onChange={changeInput}
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
                    onChange={changeInput}
                  />
                  <input
                    className="date"
                    type="text"
                    placeholder="Ano"
                    value={formationData.yearStart}
                    name="yearStart"
                    onChange={changeInput}
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
                    onChange={changeInput}
                  />
                  <input
                    className="date"
                    type="text"
                    placeholder="Ano"
                    value={formationData.yearEnd}
                    name="yearEnd"
                    onChange={changeInput}
                  />
                </span>
              </div>
              <input
                type="text"
                placeholder="Descrição"
                value={formationData.description}
                name="description"
                onChange={changeInput}
              />
              <ButtonSaveFormation>Adicionar</ButtonSaveFormation>
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
                      {resume.phone}
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
                      <p className="institution">{formationData.institution}</p>
                      <p className="city-formation">
                        {formationData.cityFormation}
                      </p>
                      <p className="description">{formationData.description}</p>
                    </div>
                    <p className="date">
                      {formationData.monthStart}
                      {formationData.yearStart}
                      {formationData.monthEnd}
                      {formationData.yearEnd}
                    </p>
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
