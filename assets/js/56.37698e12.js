(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{644:function(e,t,r){e.exports=r.p+"assets/img/azuredevops.b0dbed26.png"},804:function(e,t,r){"use strict";r.r(t);var a=r(42),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"challenege-0-create-an-azure-devops-organisation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#challenege-0-create-an-azure-devops-organisation"}},[e._v("#")]),e._v(" Challenege-0: Create an Azure DevOps Organisation")]),e._v(" "),a("img",{attrs:{src:r(644),width:"300",height:"200"}}),e._v(" "),a("h2",{attrs:{id:"here-is-what-you-will-learn"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#here-is-what-you-will-learn"}},[e._v("#")]),e._v(" Here is what you will learn")]),e._v(" "),a("ul",[a("li",[e._v("Create an Azure DevOps account for your organisation")]),e._v(" "),a("li",[e._v("Create a Team Project with an Agile Process Template")]),e._v(" "),a("li",[e._v("Invite Team members to your organization and projects")])]),e._v(" "),a("h2",{attrs:{id:"azure-devops"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#azure-devops"}},[e._v("#")]),e._v(" Azure DevOps")]),e._v(" "),a("p",[e._v("Azure DevOps provides developer services to support teams to plan work, collaborate on code development, and build and deploy applications.\nDevelopers can work in the cloud using Azure DevOps Services or on-premises using Azure DevOps Server. Azure DevOps Server was formerly named Visual Studio Team Foundation Server (TFS).")]),e._v(" "),a("p",[e._v("Azure DevOps provides integrated features that you can access through your web browser or IDE client. You can use one or more of the following services based on your business needs:")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Azure Repos")]),e._v(" provides Git repositories or Team Foundation Version Control (TFVC) for source control of your code")]),e._v(" "),a("li",[a("strong",[e._v("Azure Pipelines")]),e._v(" provides build and release services to support continuous integration and delivery of your apps")]),e._v(" "),a("li",[a("strong",[e._v("Azure Boards")]),e._v(" delivers a suite of Agile tools to support planning and tracking work, code defects, and issues using Kanban and Scrum methods")]),e._v(" "),a("li",[a("strong",[e._v("Azure Test Plans")]),e._v(" provides several tools to test your apps, including manual/exploratory testing and continuous testing")]),e._v(" "),a("li",[a("strong",[e._v("Azure Artifacts")]),e._v(" allows teams to share Maven, npm, and NuGet packages from public and private sources and integrate package sharing into your CI/CD pipelines")])]),e._v(" "),a("h2",{attrs:{id:"getting-started"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[e._v("#")]),e._v(" Getting started")]),e._v(" "),a("p",[e._v("To get started with Azure DevOps navigate to the "),a("a",{attrs:{href:"https://azure.microsoft.com/services/devops/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure DevOps overview page"),a("OutboundLink")],1),e._v(". Here you will find further links to the documentation, support, pricing and Blogs.")]),e._v(" "),a("h2",{attrs:{id:"authentication"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#authentication"}},[e._v("#")]),e._v(" Authentication")]),e._v(" "),a("p",[e._v("Before we can create an Azure DevOps account we need to understand which Identity Providers are supported by Azure DevOps.\nAzure AD, MSA (Microsoft account) and a GitHub account is supported if you want to use cloud authentication. It is recommended to use Azure AD when a large group of users must be managed or if you want to integrate Azure DevOps to your organisation's Azure AD, otherwise use your Microsoft account or a GitHub account.\nFor on-premises deployments Active Directory is recommended.")]),e._v(" "),a("p",[a("strong",[e._v("Note:")]),e._v(" If you want to integrate Azure DevOps into your organization's Azure AD make sure that you have the needed permission to create a ServicePrincipal in your Azure AD. We will create a ServicePrincipal in further challenges to authorize Azure DevOps to access your Azure Subscription in order to deploy Azure resources.")]),e._v(" "),a("h2",{attrs:{id:"create-an-azure-devops-organisation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-an-azure-devops-organisation"}},[e._v("#")]),e._v(" Create an Azure DevOps organisation")]),e._v(" "),a("ol",[a("li",[e._v("Navigate to "),a("a",{attrs:{href:"https://azure.microsoft.com/services/devops/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure DevOps"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v('Click "Start for free >", if you don\'t see a login page, please open a private browser window to make sure that you use the right account (either an Azure AD, MSA or GitHub account).')]),e._v(" "),a("li",[e._v("Give your new project a name and select a country/region.")]),e._v(" "),a("li",[e._v("Create an organization. Instructions can be found "),a("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/devops/organizations/accounts/create-organization?toc=%2Fazure%2Fdevops%2Fget-started%2Ftoc.json&bc=%2Fazure%2Fdevops%2Fget-started%2Fbreadcrumb%2Ftoc.json&view=azure-devops",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1)])]),e._v(" "),a("h2",{attrs:{id:"create-a-new-project"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-a-new-project"}},[e._v("#")]),e._v(" Create a new project")]),e._v(" "),a("p",[e._v('Create a new project, name it "College" and use the "Agile" process template.\nInstructions can be found '),a("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/devops/organizations/projects/create-project?view=azure-devops",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"create-a-new-team-within-the-new-project"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-a-new-team-within-the-new-project"}},[e._v("#")]),e._v(" Create a new Team within the new project")]),e._v(" "),a("p",[e._v('Create a new team, name it "College Team" and set it as your default team. Instructions can be found '),a("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/devops/organizations/settings/add-teams?view=azure-devops",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1)]),e._v(" "),a("h2",{attrs:{id:"add-your-colleagues-to-the-college-team"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#add-your-colleagues-to-the-college-team"}},[e._v("#")]),e._v(' Add your colleagues to the "College Team"')]),e._v(" "),a("p",[e._v('Now it\'s time to give your colleagues access to the project and to add them to the "College Team".\nInstructions can be found '),a("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/devops/organizations/security/add-users-team-project?view=azure-devops",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=o.exports}}]);