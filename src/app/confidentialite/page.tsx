import React from 'react'
import { motion } from 'framer-motion'
import { mitr } from '../../../fonts/mitr'
import { lato } from '../../../fonts/lato'

const ConfidentialiteScreen = () => {
  return (
    <main className='w-9/12 my-12 mx-auto leading-8' >
      <h2 className={`text-center my-12 ${mitr.className}`}>Politique de confidentialité</h2>
      <h3 className={`font-bold ${lato.className}`}>Protection des données</h3><br/>
      <h4 className="font-bold text-base my-3.5">Politique de confidentialité - selon le Règlement général pour la protection des données (RGDP) de mai 2018</h4>
      <p className={`text-justify indent-10 ${lato.className}`}>Cette politique de confidentialité vise à vous informer de la manière dont nous recueillons, utilisons et stockons les données qui pourraient permettre de vous identifier lorsque vous utilisez notre site internet ainsi que des cookies que nous utilisons. Nous vous invitons à lire attentivement le présent document pour connaître et comprendre nos pratiques quant aux traitements de vos données personnelles. Les Luminaires Cavallo portent une attention toute particulière à la protection des données personnelles de ses clients et des visiteurs du site et s'engagent à faire tout leur possible pour protéger vos données personnelles en conformité avec les réglementations européennes et françaises qui lui sont applicables en matière de protection des données personnelles. Les Luminaires Cavallo s'engagent à respecter la loi n°78-17 du 6 janvier 1978 relative à l'informatique, aux fichiers et aux libertés, modifiée par le Règlement européen n°2016/679 du 27 avril 2016 relatif à la protection des données personnelles.</p>
      <p className={`text-justify indent-10 ${lato.className}`}>Pour toute information sur la protection des données personnelles, vous pouvez également consulter le site de la <a href='https://www.cnil.fr/fr/definition/commission-nationale-de-linformatique-et-des-libertes-cnil' target="_blank" rel="noreferrer">Commission Nationale de l'Informatique et des Libertés</a>.</p>

      <p className={`text-justify indent-10 ${lato.className}`}><em>Les informations transmises aux Luminaires Cavallo ne sont jamais communiquées à des tiers ou revendues.</em></p><br/>

      <h4 className="font-bold text-base my-3.5">Quelles données collectons-nous auprès de vous?</h4>
      <p className={`text-justify indent-10 ${lato.className}`}>Avec votre consentement préalable, lorsque vous utilisez le site des Luminaires Cavallo ou lorsque vous nous contactez, nous pouvons collecter les données suivantes : 
      </p>
      <ul>
        <li className={`text-justify list-disc mb-2 ${lato.className}`}>prénom et nom de famille</li>
        <li className={`text-justify list-disc mb-2 ${lato.className}`}>adresse de courrier électronique</li>
        <li className={`text-justify list-disc mb-2 ${lato.className}`}>sexe</li>
        <li className={`text-justify list-disc mb-2 ${lato.className}`}>adresse postale</li>
        <li className={`text-justify list-disc mb-2 ${lato.className}`}>âge/date de naissance</li>
        <li className={`text-justify list-disc mb-2 ${lato.className}`}>mot de passe et date d’inscription (pour compte en ligne)</li>
        <li className={`text-justify list-disc mb-2 ${lato.className}`}>votre opinion sur nos produits, avis et commentaires sur notre site internet, blog et réseaux sociaux</li>
        <li className={`text-justify list-disc mb-2 ${lato.className}`}>informations de paiement (lorsque vous utilisez notre service sécurisé de paiement en ligne)</li>
        <li className={`text-justify list-disc mb-2 ${lato.className}`}>votre historique d’achats</li>
        <li className={`text-justify list-disc mb-2 ${lato.className}`}>toute demande particulière que vous pourriez nous adresser ou contenu que vous souhaitez partager</li>
        <li className={`text-justify list-disc mb-2 ${lato.className}`}>toutes autres données personnelles que vous décidez de nous communiquer par courriel, téléphone ou sur les médias sociaux (lorsque vous souhaitez partager vos questions et préoccupations, par exemple)</li>
        <li className={`text-justify list-disc mb-2 ${lato.className}`}>toutes autres informations relatives aux cookie</li>
      </ul>
      <p className={`text-justify indent-10 ${lato.className}`}>
        Conformément à la loi Informatique et Libertés n°78-17 du 6 janvier 1978, vous disposez d'un droit d'accès et de rectification des données vous concernant, et pouvez exercer ce droit en envoyant une demande par email à contact@luminaires-cavallo.fr. Vous pouvez également accéder aux informations vous concernant et procéder aux modifications nécessaires directement sur le site en vous connectant à votre espace personnel.
      </p>
      <p className={`text-justify indent-10 ${lato.className}`}>
        Les transactions bancaires passent exclusivement par l'intermédiaire de la plateforme PayPal, vos données bancaires sont cryptées et ne sont pas en notre possession.
      </p>
      <br/>
 
      <h4 className="font-bold text-base my-3.5">Pour quels usages collectons-nous vos données personnelles?</h4>
      <h4 className="font-bold text-base my-3.5">- La gestion des commandes et la relation client</h4>
      <p className={`text-justify indent-10 ${lato.className}`}>
        Assurer le service et la gestion client, traiter les paiements, pouvoir vous envoyer vos colis, éditer des factures, bordereaux d'envoi, réaliser le suivi de vos commandes, etc.
      </p>

      <h4 className="font-bold text-base my-3.5">- La lutte contre la fraude</h4>
      <p className={`text-justify indent-10 ${lato.className}`}>
        Les Luminaires Cavallo pourront, en fonction des résultats du contrôle effectué sur les commandes, prendre des mesures de sécurisation, en particulier demande de justificatifs complémentaires, pièces d’identité, justificatifs de domicile. Ces mesures auront pour effet de suspendre l'exécution de la commande voire, si le résultat de l'analyse ne permet pas de garantir la sécurité de la commande, de l'annuler.
      </p>

      <h4 className="font-bold text-base my-3.5">- Mieux cibler notre politique commerciale et améliorer le site et votre navigation, notamment grâce à l'usage de cookies</h4>
        <ul>
          <li className={`text-justify list-disc mb-2 ${lato.className}`}>
            Réaliser en interne des études et des analyses qui nous permettent de voir la manière dont vous utilisez notre site, sélectionnez nos produits afin d'évaluer la performance de notre activité.
          </li>
          <li className={`text-justify list-disc mb-2 ${lato.className}`}>
            Améliorer et optimiser l'expérience digitale et notamment s'assurer que l'affichage de nos contenus soit adapté à votre appareil.
          </li>
          <li className={`text-justify list-disc mb-2 ${lato.className}`}>
            Comme la grande majorité des sites marchands, notre site utilise des cookies pour vous distinguer des autres utilisateurs. Cela nous aide à vous fournir la meilleure expérience lorsque vous naviguez sur notre site et nous permet également d'améliorer notre site. En visitant notre site avec votre navigateur configuré de manière à autoriser les cookies, vous acceptez notre utilisation des cookies.
            </li>
        </ul>
        <h4 className="font-bold text-base my-3.5">Qu’est ce qu’un cookie ?</h4>
      <p className={`text-justify indent-10 ${lato.className}`}>
        C’est une courte ligne de lettres et de chiffres, que nous conservons sur votre navigateur ou sur le disque dur de votre ordinateur. Afin d’optimiser votre expérience sur notre site et vous faire bénéficier de certaines fonctionnalités personnalisées, votre ordinateur, tablette ou téléphone portable doit être configuré de manière à accepter les cookies. Certains cookies sont indispensables au bon fonctionnement de notre site et sont nécessaires pour vous permettre de vous déplacer sur notre site et utiliser nos services, pour l’administration du système, pour empêcher les actes frauduleux, pour maintenir votre connexion d’une page à l’autre ou pour que nous puissions garder en mémoire ce que vous avez ajouté à votre panier. Les cookies de trafic et de performance nous permettent de savoir combien d’utilisateurs visitent notre site, comment ils arrivent et naviguent sur notre site, quels services et pages sont les plus visitées, etc. Ainsi, nous pouvons améliorer notre politique commerciale mais aussi le confort et la qualité d’utilisation du site pour nos clients.
      </p>
      <p className={`text-justify indent-10 ${lato.className}`}>
        Vous pouvez, à tout moment, autoriser, limiter ou interdire les cookies en paramétrant votre navigateur internet. Nous vous informons que tout paramétrage sera susceptible de modifier votre navigation sur internet et vos conditions d’accès à certains services nécessitant l’utilisation de cookies. Le cas échéant, nous déclinons toute responsabilité pour les conséquences liées au fonctionnement dégradé de nos services résultant de l'impossibilité pour nous d'enregistrer ou de consulter les cookies nécessaires à leur fonctionnement et que vous auriez refusés ou supprimés.
      </p>
      <h4 className="font-bold text-base my-3.5">Remarque : les réseaux sociaux et les contenus générés par l'utilisateur</h4>
      <p className={`text-justify indent-10 ${lato.className}`}>
        Le site internet et les réseaux sociaux permettent aux utilisateurs de soumettre leur propre contenu (avis, commentaires, etc.). N'oubliez pas que tout contenu soumis à l'un de ces médias peut-être vu par le public, et vous devez être prudent sur le fait de communiquer certaines données personnelles, par exemple des informations financières ou votre adresse, sur ces médias. Nous déclinons toute responsabilité concernant les mesures prises par d'autres individus si vous postez publiquement des données personnelles sur notre réseau social, Facebook. Veuillez également consulter les politiques en matière de confidentialité et de cookies respectives des plateformes de réseaux sociaux que vous utilisez.
      </p>
      <h4 className="font-bold text-base my-3.5">Base légale du traitement de vos données personnelles et de vos droits</h4><br/>
      <p className={`text-justify indent-10 ${lato.className}`}>
        Le traitement de vos données personnelles est justifié légalement à différentes occasions lorsque vous concluez un contrat (en passant une commande par exemple), que vous donnez votre consentement explicite (en acceptant nos CGV) ou encore en considérant notre intérêt légitime à promouvoir Les Luminaires Cavallo dès l'instant que cet intérêt est justifié, équilibré et ne vient pas porter atteinte à votre vie privée.
      </p>
      <p className={`text-justify indent-10 ${lato.className}`}>En retour, vous avez le droit :</p>
      <ul className='mb-10'>
        <li className={`text-justify list-disc mb-2 ${lato.className}`}>de nous demander une copie de vos données personnelles.</li>
        <li className={`text-justify list-disc mb-2 ${lato.className}`}>de nous demander de rectifier, de compléter, de clarifier, de supprimer vos données personnelles ou d’en limiter le traitement à des fins de marketing direct ou autre.</li>
        <li className={`text-justify list-disc mb-2 ${lato.className}`}>de nous demander de transférer ces données à une autre organisation.</li>
        <li className={`text-justify list-disc mb-2 ${lato.className}`}>de vous opposer à ce que vos données soient utilisées à des fins de prospection commerciale.</li>
      </ul>

      <h4 className="font-bold text-base my-3.5">Conservation des données personnelles</h4>
      <p className={`text-justify indent-10 ${lato.className}`}>
        La plupart des données, par exemple informations de votre compte client et historique de commandes sont conservées tant que vous êtes un client « actif » et pendant une durée de 2 ans à compter de votre dernière activité (par exemple achat, connexion à votre compte). Passé ce délai, elles sont supprimées. Nous conservons vos données personnelles aussi longtemps que nécessaire pour mener les activités qui sont décrites dans la présente Politique de Confidentialité ou qui vous sont communiquées, ou encore aussi longtemps que la loi nous y autorise.
      </p>
      <p className={`text-justify indent-10 ${lato.className}`}>
        Nous prenons les mesures physiques et techniques appropriées pour empêcher dans toute la mesure du possible toute altération ou perte de vos données ou tout accès non autorisé à celles-ci. Sur notre site de commerce électronique, nous gérons vos informations de paiement à l’aide de méthodes répondant aux normes de l’industrie.
      </p>
      <p className={`text-justify indent-10 mb-9 ${lato.className}`}>
        Vos données personnelles sont stockées soit dans notre base de données en France soit dans celles de nos prestataires de services au sein de l’Union européenne quand c'est possible.
      </p>
      <h4 className="font-bold text-base my-3.5">Confidentialité de votre mot de passe</h4>
      <p className={`text-justify indent-10 mb-9 ${lato.className}`}>
        Vous êtes responsable de la confidentialité du mot de passe que vous avez choisi pour accéder à votre compte en ligne. Vous vous engagez donc à conserver ce mot de passe secret et à ne le communiquer à personne.
      </p>
      <h4 className="font-bold text-base my-3.5">Transaction PayPal</h4>
      <p className={`text-justify indent-10 mb-9 ${lato.className}`}>
        Nous attirons votre attention sur le fait que toutes les transactions PayPal sont soumises à la politique de confidentialité de PayPal. Veuillez-vous assurer que vous êtes d’accord avec les modalités de la politique de confidentialité de PayPal si vous souhaitez utiliser PayPal pour exécuter une transaction sur le site.
      </p>
      <h4 className="font-bold text-base my-3.5">Modification de notre politique de confidentialité</h4><br/>
      <p className={`text-justify indent-10 mb-9 ${lato.className}`}>
        Nous vous informons que cette politique de protection des données personnelles peut être modifiée par nos soins. Dans ce cas, ces modifications seront consultables sur cette page.
      </p>
      <h4 className="font-bold text-base my-3.5">Contact</h4>
      <p className={`text-justify indent-10 mb-9 ${lato.className}`}>
        Pour toute question relative à la présente politique de confidentialité ou pour toute demande relative à vos données personnelles, vous pouvez nous contacter en adressant un courriel à contact@luminaires-cavallo.fr.
      </p>
      <br/>
      <a 
        //href={hackerman} 
        download="hackerman.png">
          <button type='button' className='btn btn-dark'>Télécharger la page en pdf</button></a>
    </main>
  )
}

const Wrapper = `
  
  p{
    text-indent : 20px;
  }
  ul {
    text-indent : 0px;
    list-style: circle;
  }
`

export default ConfidentialiteScreen
