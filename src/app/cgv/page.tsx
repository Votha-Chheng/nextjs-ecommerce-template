import React, { FC } from 'react'
import { mitr } from '../../../fonts/mitr';
import { lato } from '../../../fonts/lato';

const CGVPage: FC = () => {
  return (
    <main className='w-9/12 my-12 pb-36 mx-auto leading-8'>
      <h2 className={`text-center mt-20 mb-28 ${mitr.className}`}>Conditions générales de vente</h2>
      <h3 className={`font-bold ${lato.className}`}>Préambule</h3>
      <p className={`text-justify indent-10 ${lato.className}`}>
        Le site <span className='font-bold'>luminaires-cavallo.fr</span> est un site de commerce électronique accessible via internet à l'adresse suivant : <em>www.luminaires-cavallo.fr</em>.
      </p>
      <p className={`text-justify indent-10 ${lato.className}`}>
        Le site luminaires-cavallo.fr est édité par la socitié François Cavallo, micro-entreprise, inscrite au Répertoire des Métiers sous le numéro 828121145RM1301 et dont le siège social est situé au Grand Mas d'Avignon, Le Sambuc 13200 Arles. Contact par email ou via le formulaire contact.
      </p>
      <p className={`text-justify indent-10 ${lato.className}`}>
        L'acheteur préalablement à sa commande, déclare avoir la pleine capacité juridique, lui permettant de s'engager au titre des présentes conditions générales de vente. Toute commande suppose la consultation et l'acceptation expresse préalable et sans réserves des présentes conditions générales de vente, sans toutefois que cette acceptation soit conditionnée par une signature manuscrite de la part de l'utilisateur. Les conditions générales de vente pouvant faire l'objet de modifications, les conditions applicables sont celles en vigueur sur le site à la date de la commande.
      </p>
      <ol className='list-disc'>
        <li>
          <h4 className="font-bold text-base mt-3.5">Produits, disponibilité et prix</h4>
          <ol>
            <li>
              <h5 className={`font-bold text-base mt-3 ${lato.className}`}>&#x25B8; Disponibilité des produits à la vente en ligne</h5>
              <p className={`text-justify indent-10 ${lato.className}`}>
                Les Luminaires Cavallo acceptent les commandes dans la la limite des stocks disponibles. Les Luminaires Cavallo informent l'acheteur de la disponibilité des articles vendus sur le site, sur la page d'information de chaque article. Si malgré leur vigilance, un ou plusieurs articles proposés sont indisponible, Les Luminaires Cavallo en informeront l'acheteur par email dans les meilleurs délais. L'acheteur pourra alors choisir d'annuler sa partiellement ou totalement sa commande, et Les Luminaires Cavallo procèderont au remboursement global des articles abandonnés (les frais de port ne sont remboursés qu'en cas d'annulation totale de la commande).
              </p>
              <p className={`text-justify indent-10 ${lato.className}`}>
                Les produits sont décris avec la plus grande exactitude possible. Toutefois, il n'est pas exclu que des erreurs ou omissions puissent intervenir, lesquelles ne pourront engager la responsabilité des Luminaires Cavallo. 
              </p>
            </li>
            <li>
              <h5 className={`font-bold text-base mt-4 ${lato.className}`}>&#x25B8; Prix</h5>
              <p className={`text-justify indent-10 ${lato.className}`}>
                Les prix sont stipulés en euros HT. La TVA étant non applicable, art 293 B du CGI. Ces prix s'entendent hors participation aux frais de traitement (port, emballage et confection du colis selon montants en vigueur). tout changement du taux applicable pourra être répercuté sur le prix des produits. Toutefois les prix ne pourront être modifiés une fois la commande du client passée.
              </p>
            </li>
          </ol>
        </li><br/>
        <li>
        <h4 className="font-bold text-base mt-3.5">Validation et paiement de la commande</h4>
          <ol>
            <li>
            <h5 className={`font-bold text-base mt-4 ${lato.className}`}>&#x25B8; Identification de l'acheteur</h5>
              <p className={`text-justify indent-10 ${lato.className}`}>
                L'acheteur a la responsabilité de fournir aux Luminaires Cavallo des informations fiables et exactes, notamment s'agissant de l'adresse de livraison. La responsabilité des Luminaires Cavallo ne saurait être engagée, du fait d'informations fausses et incomplètes fournies par l'acheteur et Les Luminaires Cavallo pourront annuler une commande, en cas d'informations incomplètes concernant, notamment l'adresse de livraison.
              </p>
              <p className={`text-justify indent-10 ${lato.className}`}>
                L'acheteur se doit d'assurer la confidentialité des données d'accès à son compte.
              </p>
            </li>
            <li>
              <h5 className={`font-bold text-base mt-4 ${lato.className}`}>&#x25B8; Enregistrement et validation de la commande</h5>
              <p className={`text-justify indent-10 ${lato.className}`}>
                L'acheteur passe sa commande selon le processus en vigueur sur le site et confirme le récapitulatif détaillé de celle-ci (produits, prix, modalités de livraison). Avant confirmation de sa commande, l’acheteur dispose de la possibilité d’identifier les erreurs éventuellement commises dans la saisie des données et de les corriger. Avant de confirmer sa commande, l’acheteur vérifie son panier (prix et produits commandés), choisit le mode et le lieu de la livraison, est informé des tarifs et délais de livraison applicables à sa commande et se voit demander de prendre connaissance puis d’accepter les présentes Conditions Générales de Vente. Un accusé de réception de la commande écrit lui est alors adressé par Les Luminaires Cavallo, après validation de la commande. La commande ne sera considérée comme acceptée qu’après validation par Les Luminaires Cavallo. A réception de la commande Les Luminaires Cavallo pourront, avant d’adresser à l’acheteur un accusé de réception de commande, bloquer celle-ci, si un problème a été détecté, par exemple, concernant le paiement, l’adresse de livraison indiquée ou les coordonnées de l’acheteur. Toute commande frauduleuse ou présumée comme telle, sera considérée par le vendeur comme nulle et non avenue. Seules les commandes validées sont opposables aux Luminaires Cavallo.
              </p>
            </li>
            <li>
              <h5 className={`font-bold text-base mt-4 ${lato.className}`}>&#x25B8; Paiement de la commande</h5>
              <p className={`text-justify indent-10 ${lato.className}`}>
                La passation d’une commande oblige à son paiement et la vente ne sera considérée comme définitivement validée qu'après l'envoi à l'acheteur de la confirmation de la commande et encaissement par Les Luminaires Cavallo de l'intégralité du prix (autorisation bancaire de débit reçue par Les Luminaires Cavallo). Le paiement doit être réalisé lors de la commande par l'acheteur. En cas de litige ou d’incident de paiement, toute commande est susceptible d’être suspendue ou annulée et ce quelque soit sa nature ou son niveau d’exécution. Toutes les commandes sont payables en euros. L'acheteur garantit qu'il dispose des autorisations éventuellement nécessaires pour utiliser le mode de paiement choisi lors de l'enregistrement du bon de commande. Pour tout paiement, Les Luminaires Cavallo se réservent le droit de demander une photocopie de la pièce d'identité de l'acheteur et le cas échéant, de celle du titulaire du moyen de paiement utilisé par l’acheteur. Dans le cadre de la lutte contre les fraudes sur Internet, les informations relatives à la commande pourront être transmises à tout tiers pour vérification.
              </p>
            </li>
            <li>
            <h5 className={`font-bold text-base mt-4 ${lato.className}`}>&#x25B8; Mode de paiement</h5>
              <p className={`text-justify indent-10 ${lato.className}`}>
                Pour régler sa commande, l'acheteur dispose des moyens de paiement suivant : carte bancaire et virement bancaire.
              </p>
              <p className={`text-justify indent-10 ${lato.className}`}>
                Les paiements en plusieurs fois ne sont pas possibles pour les ventes en ligne.
              </p>
              <p className={`text-justify indent-10 ${lato.className}`}>
                Les paiements par carte bancaire sont sécurisés et réalisés grâce au système PayPal. A aucun moment, Les Luminaires Cavallo n'ont accès aux coordonnées bancaires de l'acheteur. Les cartes bancaires acceptées sur le site sont les suivantes : Visa, Mastercard, American Express et Maestro. En cas de paiement par carte bancaire, en principe, le prélèvement sera effectué au moment de la confirmation de sa commande par l’acheteur, par débit immédiat de son compte bancaire. 
              </p>
            </li><br/>
          </ol>
        </li>
        <li>
        <h4 className="font-bold text-base mt-3.5">Expédition et livraison des commandes</h4>
          <ol>
            <li>
              <h5 className={`font-bold text-base mt-4 ${lato.className}`}>&#x25B8; Généralités</h5>
              <p className={`text-justify indent-10 ${lato.className}`}>
                Seules sont acceptées les commandes pour des livraisons réalisées en France métropolitaine et en Corse. La livraison sera effectuée dans le relais colis Mondial Relay de son choix. Afin de prévenir les fraudes, Les Luminaires Cavallo se réservent la possibilité de vérifier l'identité de l'acheteur avant de valider la commande. L'acheteur s'engage à prendre livraison des produits à l'adresse de livraison qu'il a indiquée. Toute commande à livrer donne lieu à facturation de frais de livraison récapitulés au moment de la confirmation de la commande par l'acheteur et qui viennent s'ajouter au prix des produits commandés. 
              </p>
              <p className={`text-justify indent-10 ${lato.className}`}>
                Contraintes de volume : les commandes ne respectant pas les contraintes de volume indiquées ci-dessous peuvent être refusées par Les Luminaires Cavallo ou donner lieu à facturation de frais de livraison complémentaires.
                <br/>
              </p>
              <p className={`font-bold text-center mb-8 ${lato.className}`}>
                Hauteur du colis (H) : 60 cm max<br/>
                Longueur du colis (L ) : 120 cm max<br/>
                Profondeur du colis (P) : 60 cm max<br/>
                H+L+P = 150 cm max
              </p>
            </li>
            <li>
            <h5 className={`font-bold text-base mt-4 ${lato.className}`}>&#x25B8; Livraison en relais colis</h5>
            <p className={`text-justify indent-10 ${lato.className}`}>
              Les colis livrés en relais sont acheminés par la société Mondial Relay. Lors de l'arrivée du colis dans le relais sélectionné, l'acheteur est prévenu par email ou téléphone par la société Mondial Relay. L'acheteur dispose alors de 15 jours pour venir réceptionner son colis. A l'issue de cette période, si le colis n'a pas été réclamé par l'acheteur, celui-ci est re-acheminé vers la société Les Luminaires Cavallo qui procédera à l'annulation de la commande et à son remboursement déduction faite des frais d'envoi. 
            </p>
            </li>
            <li>
              <h5 className={`font-bold text-base mt-4 ${lato.className}`}>&#x25B8; Réception des marchandises par l'acheteur</h5>
              <p className={`text-justify indent-10 ${lato.className}`}>
                Il est conseillé à l'acheteur de vérifier, en présence du responsable du point de retrait, l'état de l'emballage de la marchandise et son contenu, à la livraison. Par la signature du bon de livraison sans réserves précises, et l'acceptation des produits, l'acheteur reconnait avoir bien réceptionné les produits commandés. Dans l'hypothèse où l'acheteur aurait un quelconque doute de quelque nature que ce soit sur l'état ou le contenu de son colis, il lui est conseillé de vérifier en présence du responsable du point de retrait l'état du colis et le nombre de colis livrés. En cas de doute, de refuser le colis. Dans tous les cas il lui est conseillé de signaler les incidents relatifs à la livraison des produits dans le délai de 48h à compter de la date de livraison aux Luminaires Cavallo via l'adresse mail contact@luminaires-cavallo.fr en précisant le numéro de la commande concernée et les motifs des réserves formulées ou du refus du colis. En cas de refus du colis pour des motifs légitimes ayant donné lieu à des réserves circonstanciées, Les Luminaires Cavallo procèderont au remboursement des produit.
              </p>
            </li>
            <li>
              <h5 className={`font-bold text-base mt-4 ${lato.className}`}>&#x25B8; Délai de livraison</h5>
              <p className={`text-justify indent-10 ${lato.className}`}>
                Le délai de livraison est indiqué avant confirmation de la commande par l'acheteur. Il court à compter de la validation de la commande par Les Luminaires Cavallo suite au paiement effectif par l'acheteur et il tient compte du délai moyen de livraison par le transporteur et du délai moyen d'expédition par Les Luminaires Cavallo. Après confirmation de commande, Les Luminaires Cavallo s’engagent à expédier par Mondial Relay, tous les produits commandés par l’acheteur et ce dans un délai de 5 jours ouvrables. En tout état de cause, les produits commandés seront livrés dans un délai maximum de trente jours à compter du jour suivant celui où l'acheteur a enregistré sa commande, sous réserve du paiement complet du prix et de la validation de la commande. Les Luminaires Cavallo ne sauraient être mis en cause et tenus pour responsable des conséquences de tous évènements échappant à sa volonté et notamment les cas de force majeure et toute inexécution ou mauvaise exécution imputable à un tiers ou à l'acheteur.
              </p>
              </li>
            <li>
              <h5 className={`font-bold text-base mt-4 ${lato.className}`}>&#x25B8; Livraison non assurée</h5>
              <p className={`text-justify indent-10 ${lato.className}`}>
                Faute de livraison à la date convenue, et sous réserve que les informations relatives à la livraison soient correctes, l'acheteur devra mettre en demeure Les Luminaires Cavallo de livrer dans un délai raisonnable. Faute pour Les Luminaires Cavallo de s'être exécuté dans ce délai, l'acheteur aura la possibilité d'annuler sa commande, pour le ou les produits concernés par ce retard, par lettre recommandée avec accusée de réception adressée à :
              </p>
            <p className={`font-bold ${lato.className}`} style={{width:'300px', margin: '0 auto'}}>
              <span>
                François Cavallo<br/>
                <em>Grand Mas d'Avignon, Le Sambuc</em><br/>
                13200 Arles
              </span>
            </p>
            <br/>
            <p className={`text-justify indent-10 ${lato.className}`}>
              Le contrat sera résolu à compte de la réception de la lettre, sauf si, entre temps, le produit a été livré par Les Luminaires Cavallo. Les sommes versées par l'acheteur lui seront alors remboursées sans délai, au plus tard dans les quatorze jours suivant la date de dénonciation du contrat, à l'exclusion de toute autre indemnisation. Lorsque les produits ont été expédiés dans les délais, mais n'ont pas été livrés à l'acheteur, une enquête sera réalisées auprès du transporteur. Une enquête peut durer jusqu'à 21 jours ouvrés. Si pendant ce délai, le produit est retrouvé, il sera immédiatement ré-acheminé au lieu de livraison désigné dans le bon de commande, sous réserve que l'acheteur n'ait pas annulé sa commande entre temps. En revanche si le produit commandé n'est pas retrouvé à l'issue de ce délai de 21 jours d'enquête, que l'acheteur n'a pas annulé sa commande, Les Luminaires Cavallo procèderont au remboursement du produit et des frais de livraison. Pour tout arbitrage de litige entre l'acheteur et le vendeur concernant la livraison, seules les informations fournies par les systèmes de suivi du transporteur pourront faire foi.
            </p>
            </li>
          </ol>
        </li>
        <br/>
        <li>
        <h4 className="font-bold text-base mt-3.5"> Conditions d'annulation</h4>
          <ol>
            <li>
              <h5 className={`font-bold text-base mt-4 ${lato.className}`}>&#x25B8; Droits de rétractation</h5>
              <p className={`text-justify indent-10 ${lato.className}`}>
                Conformément à l'article L.121-21 et suivants du Code de la Consommation, pour tout achat de produits en ligne, l'acheteur dispose d'un délai légal de quatorze jours pour exercer son droit de rétractation et annuler totalement ou partiellement sa commande, à compter du jour de réception des produits, sans donner de motifs. Pour exercer ce droit de rétractation, l'acheteur doit notifier aux Luminaires Cavallo, sa décision de rétractation au moyen d'une déclaration dénuée d'ambiguïté. La décision de rétractation peut-être notifiée via notre formulaire de contact ou par email à l'adresse : contact@luminaires-cavallo.fr.
              </p>
              <p className={`text-justify indent-10 ${lato.className}`}>
                En cas de rétractation, dans les délais susmentionnés, l'acheteur devra retourner aux Luminaires Cavallo les produits concernés, dans le détail de quatorze jours à compter de la communication de sa décision de se rétracter.
              </p>
              <p className={`text-justify indent-10 ${lato.className}`}>
                Les produits créés sur-mesure ne peuvent pas être retournés dans le cadre du droit de rétractation (conformément à l'article L.121-21-8 du Code de la Consommation).
              </p>
              <p className={`text-justify indent-10 ${lato.className}`}>
                En cas d'échange ou remboursement, l'acheteur renvoie le(s) produit(s) dans son(leurs) emballage(s) d'origine, intact(s), à l'adresse suivante :
              </p>
              <p className={`font-bold mb-3 ${lato.className}`} style={{width:'300px', margin: '0 auto'}}>
                <span>
                  François Cavallo<br/>
                  <em>Grand Mas d'Avignon, Le Sambuc</em><br/>
                  13200 Arles
                </span>
              </p>
              <p className={`text-justify indent-10 ${lato.className}`}>
                Le remboursement est dû dans un délai maximum de 15 jours, les frais de retour étant à la charge de l'acheteur.
              </p>
            </li>
            <li>
              <h5 className={`font-bold text-base mt-4 ${lato.className}`}>&#x25B8; Conditions de retour</h5>
              <p className={`text-justify indent-10 ${lato.className}`}>
                L'acheteur sera remboursé du prix des produits et des frais de livraison (sauf frais supplémentaires découlant du choix par l'acheteur d'un mode de livraison plus coûteux que le mode de livraison standard proposé par Les Luminaires Cavallo) au plus tard quatorze jours à compter du moins tardif des évènements suivants : récupération des produits ou transmission par l'acheteur d'une preuve d'expédition des produits retournés. Demeurent, toutefois, à la charge de l'acheteur les frais directs de retour des produits. Les produits doivent impérativement être retournés dans un parfait état de revente, dans leur état d'origine (emballage, accessoires) et dûment scellés. La responsabilité de l'acheteur sera engagée en cas de dépréciation du produit résultant de manipulations autres que celles nécessaires pour établir, la nature, les caractéristiques et le bon fonctionnement de ce produit et les produits utilisés, transformés, abîmés ne pourront être repris. Le remboursement sera effectué en utilisant le même mode de paiement que celui utilisé pour la transaction initiale, sauf si l'acheteur et Les Luminaires Cavallo conviennent conjointement et expressément d'un moyen de remboursement différent.  
              </p>
            </li>
          </ol>
        </li><br/>
        <li>
        <h4 className="font-bold text-base mt-3.5">Garantie</h4>
          <p className={`text-justify indent-10 ${lato.className}`}>
            Les Luminaires Cavallo vous garantissent que tous les produits sélectionnés sont fabriqués en France. Dans tous les cas, Les Luminaires Cavallo ne pourront être tenu responsables pour non respect des dispositions réglementaires et législatives en vigueur dans le pays de réception, la responsabilité des Luminaires Cavallo est systématiquement limitée à la valeur du produit mis en cause, valeur à sa date de vente et ce sans possibilités de recours envers la marque. En toute hypothèse, le client bénéficie de la garantie légale d’éviction et des vices cachés (art. 1625 et suivants du code civil). A la condition que l’acheteur fasse la preuve du défaut caché, le vendeur doit légalement en réparer toutes les conséquences (art.1641 et suivants du code civil) ; si l’acheteur s’adresse aux tribunaux, il doit le faire dans un délai maximum de 15 jours à compter de la découverte du défaut caché (art ;1648 du code civil).
          </p>
          <p className={`text-justify indent-10 ${lato.className}`}>
            Les produits en vente sur le site ne sont pas couverts pour :
          </p>
          <ul>
            <li>
              <h5 className={`font-bold text-base mt-4 ${lato.className}`}>&#x25B8; les dysfonctionnements liés à une utilisation anormale ou non conforme ou à un défaut d’entretien du produit</h5>
            </li>
            <li>
              <h5 className={`font-bold text-base mt-4 ${lato.className}`}>&#x25B8; les dysfonctionnements liés à l’usure normale des produits</h5>
            </li>
            <li>
              <h5 className={`font-bold text-base mt-4 ${lato.className}`}>&#x25B8; le remplacement des accessoires, pièces d’usure et consommables</h5>
            </li>
            <li>
              <h5 className={`font-bold text-base mt-4 ${lato.className}`}>&#x25B8; les dégradations liées aux divers chocs occasionnés aux produits ou une modification des produits par l’acheteur</h5>
            </li>
            <li>
              <h5 className={`font-bold text-base mt-4 ${lato.className}`}>&#x25B8; les défauts ou conséquences liés à toute cause extérieure</h5>
            </li>
          </ul>
        </li><br/>
        <li>
        <h4 className="font-bold text-base mt-3.5">Litiges</h4>
        <p className={`text-justify indent-10 mb-5 ${lato.className}`}>
          Le présent contrat est soumis au droit français. Les Luminaires Cavallo ne peuvent être tenu pour responsables des dommages de toute nature, tant matériels qu’immatériels ou corporels, qui pourraient résulter d’un mauvais fonctionnement ou de la mauvaise utilisation des produits commercialisés. Il en est de même pour les éventuelles modifications des produits résultant des fabricants.
        </p>
        </li>
        <li>
          <h4 className="font-bold text-base mt-3.5">Gestion des données personnelles</h4>
          <p className={`text-justify indent-10 ${lato.className}`}>
            En France, les données personnelles sont notamment protégées par la loi n° 78-87 du 6 janvier 1978, la loi n° 2004-801 du 6 août 2004, l’article L. 226-13 du Code pénal et la Directive Européenne du 24 octobre 1995. Les informations collectées sur le site internet luminaires-cavallo.fr sont strictement confidentielles et nous sont uniquement destinées, dans le but du traitement de votre commande. L'utilisateur est informé que ces informations font l’objet d’un traitement automatisé des données. L'utilisateur garantit que les informations saisies sur le site internet sont relatives à sa véritable identité et vraies. Il incombe à l'utilisateur de modifier dans la rubrique « mon compte » les informations transmises incorrectes ou qui ne sont plus valables. Les Luminaires Cavallo ne pourront pas être tenus responsables des conséquences de ce manque d’actualisation de vos données personnelles. Conformément aux dispositions des articles 38 et suivants de la loi 78-17 du 6 janvier 1978 relative à l’informatique, aux fichiers et aux libertés, tout utilisateur dispose d’un droit d’accès, de rectification et d’opposition aux données personnelles le concernant, en effectuant sa demande écrite et signée, par email à l'adresse contact@luminaires-cavallo.fr
          </p>
          <p className={`text-justify indent-10 ${lato.className}`}>
            Le site luminaires-cavallo.fr n’est pas déclaré à la CNIL car il ne recueille pas d’informations personnelles. Les bases de données sont protégées par les dispositions de la loi du 1er juillet 1998 transposant la directive 96/9 du 11 mars 1996 relative à la protection juridique des bases de données.
          </p>
        </li>
      </ol>
    </main>
  )
}

export default CGVPage