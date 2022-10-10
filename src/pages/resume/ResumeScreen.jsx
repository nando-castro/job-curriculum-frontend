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
  Item,
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
  SkillContainer,
  LanguageContainer,
  ButtonBack,
} from "./styles";

import { MdEmail, MdLocationOn } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import {
  IoIosAddCircleOutline,
  IoIosRemoveCircleOutline,
  IoMdArrowRoundBack,
} from "react-icons/io";

import { BsSquareFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useAuth } from "../../context/auth";
import { useNavigate } from "react-router-dom";

export default function ResumeScreen() {
  const navigate = useNavigate();

  const { user } = useAuth();
  const {
    idResume,
    setIdResume,
    experienceItems,
    setExperienceItems,
    formationItems,
    setFormationItems,
    skillItems,
    setSkillItems,
    languageItems,
    setLanguageItems,
    resumeItems,
    setResumeItems,
  } = useAuth();

  // const [experienceItems, setExperienceItems] = useState([]);

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
    occupation: "",
    company: "",
    city: "",
    monthStart: "",
    yearStart: "",
    monthEnd: "",
    yearEnd: "",
    description: "",
    personalDataId: null,
  });
  const [skillData, setSkillData] = useState({
    skill: "",
    personalDataId: null,
  });
  const [languageData, setLanguageData] = useState({
    language: "",
    personalDataId: null,
  });
  const [personalData, setPersonalData] = useState(false);
  const [formation, setFormation] = useState(false);
  const [experience, setExperience] = useState(false);
  const [skill, setSkill] = useState(false);
  const [language, setLanguage] = useState(false);

  function returnMenu() {
    setIdResume([]);
    setExperienceItems([]);
    setFormationItems([]);
    setLanguageItems([]);
    setSkillItems([]);
    navigate("/");
  }

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
  }

  function changeInputFormation(e) {
    setFormationData({ ...formationData, [e.target.name]: e.target.value });
  }
  function changeInputExperience(e) {
    setExperienceData({ ...experienceData, [e.target.name]: e.target.value });
  }
  function changeInputSkill(e) {
    setSkillData({ ...skillData, [e.target.name]: e.target.value });
  }
  function changeInputLanguage(e) {
    setLanguageData({ ...languageData, [e.target.name]: e.target.value });
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
        console.log(err);
      });
  }
  function saveExperience(e) {
    e.preventDefault();
    api
      .post(
        "experience/create",
        { ...experienceData, personalDataId: idResume },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      )
      .then((res) => {
        setExperience(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function saveSkill(e) {
    e.preventDefault();
    api
      .post(
        "skill/create",
        { ...skillData, personalDataId: idResume },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      )
      .then((res) => {
        setSkill(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function saveLanguage(e) {
    e.preventDefault();
    api
      .post(
        "language/create",
        { ...languageData, personalDataId: idResume },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      )
      .then((res) => {
        setLanguage(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function updatePersonalData(e) {
    e.preventDefault();
    api
      .put(
        `resume/update/${idResume}`,
        { ...resume },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      )
      .then((res) => {
        setPersonalData(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    if (user) {
      function getExperiences() {
        api
          .get(`experiences/${idResume}`, {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          })
          .then((res) => {
            setExperienceItems(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }
      getExperiences();
    }
  }, []);

  useEffect(() => {
    if (user) {
      function getFormations() {
        api
          .get(`formations/${idResume}`, {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          })
          .then((res) => {
            setFormationItems(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }
      getFormations();
    }
  }, []);

  useEffect(() => {
    if (user) {
      function getSkills() {
        api
          .get(`skills/${idResume}`, {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          })
          .then((res) => {
            setSkillItems(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }
      getSkills();
    }
  }, []);

  useEffect(() => {
    if (user) {
      function getLanguages() {
        api
          .get(`languages/${idResume}`, {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          })
          .then((res) => {
            setLanguageItems(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }
      getLanguages();
    }
  }, []);
  useEffect(() => {
    if (user) {
      function getResume() {
        api
          .get(`resume/${idResume}`, {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          })
          .then((res) => {
            setResumeItems(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }
      getResume();
    }
  }, []);

  function renderExperiences() {
    if (user) {
      return experienceItems.map((i, index) => (
        <Item key={index}>
          <div>
            <div>
              <p className="ocuppacion">{i.occupation}</p>
              <p className="company">{(<i></i>).company}</p>
              <p className="city-experience">{i.city}</p>
              <p className="description">{i.description}</p>
            </div>
            <p className="date">
              {i.monthStart}/{i.yearStart} - {i.monthEnd}/{i.yearEnd}
            </p>
          </div>
        </Item>
      ));
    }
  }
  function renderFormations() {
    if (user) {
      return formationItems.map((i, index) => (
        <Item key={index}>
          <div>
            <div>
              <p className="formation">{i.formation}</p>
              <main>
                <p className="institution">{i.institution}</p>
                <p className="city-formation">{i.city}</p>
              </main>
            </div>
            <p className="date">
              {i.monthStart}/{i.yearStart} - {i.monthEnd}/{i.yearEnd}
            </p>
            <p className="description">{i.description}</p>
          </div>
        </Item>
      ));
    }
  }
  function renderSkills() {
    if (user) {
      return skillItems.map((i, index) => (
        <Item key={index}>
          <BsSquareFill className="icon" />
          <p>{i.skill}</p>
        </Item>
      ));
    }
  }
  function renderLanguages() {
    if (user) {
      return languageItems.map((i, index) => (
        <Item key={index}>
          <li>{i.language}</li>
        </Item>
      ));
    }
  }
  function renderResume() {
    if (user) {
      return resumeItems.map((i, index) => (
        <ResumeTop key={index}>
          <ResumeImage src={i.picture} />
          <ResumeProfile>
            <ResumeName>
              <ResumeFirstName>{i.firstName}</ResumeFirstName>
              <ResumeLastName>{i.lastName}</ResumeLastName>
            </ResumeName>
            <ResumeOffice>{i.office}</ResumeOffice>
            <ResumeInfos>
              <ResumeAddress>
                <ResumeComunication>
                  <ResumeEmail>
                    <MdEmail className="icon" />
                    {i.email}
                  </ResumeEmail>
                  <ResumePhone>
                    <FaPhoneAlt className="icon" />
                    {i.numberPhone}
                  </ResumePhone>
                </ResumeComunication>
                <div>
                  <p>
                    <MdLocationOn className="icon" />
                    {i.address}
                  </p>
                  <p>{i.postalCode}</p>
                  <p>{i.city}</p>
                </div>
              </ResumeAddress>
            </ResumeInfos>
          </ResumeProfile>
        </ResumeTop>
      ));
    }
  }

  return (
    <Container>
      <ContentResume>
        <Content>
          <Header>
            <ButtonBack onClick={returnMenu}>
              <IoMdArrowRoundBack />
              Voltar
            </ButtonBack>
          </Header>
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
                value={experienceData.occupation}
                name="occupation"
                onChange={changeInputExperience}
              />
              <input
                type="text"
                placeholder="Empresa"
                value={experienceData.company}
                name="company"
                onChange={changeInputExperience}
              />
              <input
                type="text"
                placeholder="Cidade"
                value={experienceData.city}
                name="city"
                onChange={changeInputExperience}
              />
              <div>
                <span>
                  <p>Data de início</p>
                  <input
                    className="date"
                    type="text"
                    placeholder="Mês"
                    value={experienceData.monthStart}
                    name="monthStart"
                    onChange={changeInputExperience}
                  />
                  <input
                    className="date"
                    type="text"
                    placeholder="Ano"
                    value={experienceData.yearStart}
                    name="yearStart"
                    onChange={changeInputExperience}
                  />
                </span>

                <span>
                  <p>Data de término</p>
                  <input
                    className="date"
                    type="text"
                    placeholder="Mês"
                    value={experienceData.monthEnd}
                    name="monthEnd"
                    onChange={changeInputExperience}
                  />
                  <input
                    className="date"
                    type="text"
                    placeholder="Ano"
                    value={experienceData.yearEnd}
                    name="yearEnd"
                    onChange={changeInputExperience}
                  />
                </span>
              </div>
              <input
                type="text"
                placeholder="Descrição"
                value={experienceData.description}
                name="description"
                onChange={changeInputExperience}
              />
              <ButtonSaveFormation onClick={saveExperience}>
                Adicionar
              </ButtonSaveFormation>
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
                onChange={changeInputSkill}
              />
              <ButtonSaveFormation onClick={saveSkill}>
                Adicionar
              </ButtonSaveFormation>
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
                onChange={changeInputLanguage}
              />
              <ButtonSaveFormation onClick={saveLanguage}>
                Adicionar
              </ButtonSaveFormation>
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
          {idResume && resumeItems.length > 0 ? (
            <>{renderResume()}</>
          ) : (
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
                      <p>
                        <MdLocationOn className="icon" />
                        {resume.address}
                      </p>
                      <p>{resume.postalCode}</p>
                      <p>{resume.city}</p>
                    </div>
                  </ResumeAddress>
                </ResumeInfos>
              </ResumeProfile>
            </ResumeTop>
          )}
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
              ) : formationItems.length > 0 ? (
                <FormationContainer>
                  <h2>Formação</h2>
                  {renderFormations()}
                </FormationContainer>
              ) : null}
              {experience ? (
                <FormationContainer>
                  <h2>Experiência</h2>
                  <div>
                    <div>
                      <p className="ocuppacion">{experienceData.occupation}</p>
                      <p className="company">{experienceData.company}</p>
                      <p className="city-experience">{experienceData.city}</p>
                      <p className="description">
                        {experienceData.description}
                      </p>
                    </div>
                    <p className="date">
                      {experienceData.monthStart} / {experienceData.yearStart} -
                      {experienceData.monthEnd} / {experienceData.yearEnd}
                    </p>
                  </div>
                  {renderExperiences()}
                </FormationContainer>
              ) : experienceItems.length > 0 ? (
                <FormationContainer>
                  <h2>Experiência</h2>
                  {renderExperiences()}
                </FormationContainer>
              ) : null}
            </ResumeLeft>
            <ResumeRight>
              {skill ? (
                <SkillContainer>
                  <h2>Habilidade</h2>
                  <p>{skillData.skill}</p>
                  {renderSkills()}
                </SkillContainer>
              ) : skillItems.length > 0 ? (
                <SkillContainer>
                  <h2>Habilidade</h2>
                  {renderSkills()}
                </SkillContainer>
              ) : null}
              {language ? (
                <LanguageContainer>
                  <h2>Idioma</h2>
                  <li>{languageData.language}</li>
                  {renderLanguages()}
                </LanguageContainer>
              ) : languageItems.length > 0 ? (
                <LanguageContainer>
                  <h2>Idioma</h2>
                  {renderLanguages()}
                </LanguageContainer>
              ) : null}
            </ResumeRight>
          </ContentInfo>
        </ViewResume>
      </ContentResume>
    </Container>
  );
}
