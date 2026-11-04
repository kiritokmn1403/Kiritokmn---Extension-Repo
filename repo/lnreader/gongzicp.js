var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var e_1, _b;
var Pr = Object.create;
var Pe = Object.defineProperty, Mr = Object.defineProperties, Br = Object.getOwnPropertyDescriptor, Hr = Object.getOwnPropertyDescriptors, _r = Object.getOwnPropertyNames, Eu = Object.getOwnPropertySymbols, Fr = Object.getPrototypeOf, Nu = Object.prototype.hasOwnProperty, Vr = Object.prototype.propertyIsEnumerable;
var ku = function (t, e, u) { return e in t ? Pe(t, e, { enumerable: !0, configurable: !0, writable: !0, value: u }) : t[e] = u; }, ue = function (t, e) {
    var e_2, _b;
    for (var u in e || (e = {}))
        Nu.call(e, u) && ku(t, u, e[u]);
    if (Eu)
        try {
            for (var _c = __values(Eu(e)), _d = _c.next(); !_d.done; _d = _c.next()) {
                var u = _d.value;
                Vr.call(e, u) && ku(t, u, e[u]);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
            }
            finally { if (e_2) throw e_2.error; }
        }
    return t;
}, pe = function (t, e) { return Mr(t, Hr(e)); };
var zr = function (t, e) { return function () { return (e || t((e = { exports: {} }).exports, e), e.exports); }; }, Nt = function (t, e) { for (var u in e)
    Pe(t, u, { get: e[u], enumerable: !0 }); }, qu = function (t, e, u, r) {
    var e_3, _b;
    if (e && typeof e == "object" || typeof e == "function") {
        var _loop_1 = function (i) {
            !Nu.call(t, i) && i !== u && Pe(t, i, { get: function () { return e[i]; }, enumerable: !(r = Br(e, i)) || r.enumerable });
        };
        try {
            for (var _c = __values(_r(e)), _d = _c.next(); !_d.done; _d = _c.next()) {
                var i = _d.value;
                _loop_1(i);
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
            }
            finally { if (e_3) throw e_3.error; }
        }
    }
    return t;
};
var ge = function (t, e, u) { return (u = t != null ? Pr(Fr(t)) : {}, qu(e || !t || !t.__esModule ? Pe(u, "default", { value: t, enumerable: !0 }) : u, t)); }, Rr = function (t) { return qu(Pe({}, "__esModule", { value: !0 }), t); };
var be = zr(function (zi, rr) { rr.exports = { trueFunc: function () { return !0; }, falseFunc: function () { return !1; } }; });
var h0 = {};
Nt(h0, { default: function () { return d0; } });
module.exports = Rr(h0);
var Ze = new Uint16Array('ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map(function (t) { return t.charCodeAt(0); }));
var Je = new Uint16Array("Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map(function (t) { return t.charCodeAt(0); }));
var qt, jr = new Map([[0, 65533], [128, 8364], [130, 8218], [131, 402], [132, 8222], [133, 8230], [134, 8224], [135, 8225], [136, 710], [137, 8240], [138, 352], [139, 8249], [140, 338], [142, 381], [145, 8216], [146, 8217], [147, 8220], [148, 8221], [149, 8226], [150, 8211], [151, 8212], [152, 732], [153, 8482], [154, 353], [155, 8250], [156, 339], [158, 382], [159, 376]]), Se = (qt = String.fromCodePoint) !== null && qt !== void 0 ? qt : function (t) { var e = ""; return t > 65535 && (t -= 65536, e += String.fromCharCode(t >>> 10 & 1023 | 55296), t = 56320 | t & 1023), e += String.fromCharCode(t), e; };
function Ct(t) { var e; return t >= 55296 && t <= 57343 || t > 1114111 ? 65533 : (e = jr.get(t)) !== null && e !== void 0 ? e : t; }
var R;
(function (t) { t[t.NUM = 35] = "NUM", t[t.SEMI = 59] = "SEMI", t[t.EQUALS = 61] = "EQUALS", t[t.ZERO = 48] = "ZERO", t[t.NINE = 57] = "NINE", t[t.LOWER_A = 97] = "LOWER_A", t[t.LOWER_F = 102] = "LOWER_F", t[t.LOWER_X = 120] = "LOWER_X", t[t.LOWER_Z = 122] = "LOWER_Z", t[t.UPPER_A = 65] = "UPPER_A", t[t.UPPER_F = 70] = "UPPER_F", t[t.UPPER_Z = 90] = "UPPER_Z"; })(R || (R = {}));
var Gr = 32, fe;
(function (t) { t[t.VALUE_LENGTH = 49152] = "VALUE_LENGTH", t[t.BRANCH_LENGTH = 16256] = "BRANCH_LENGTH", t[t.JUMP_TABLE = 127] = "JUMP_TABLE"; })(fe || (fe = {}));
function It(t) { return t >= R.ZERO && t <= R.NINE; }
function $r(t) { return t >= R.UPPER_A && t <= R.UPPER_F || t >= R.LOWER_A && t <= R.LOWER_F; }
function Wr(t) { return t >= R.UPPER_A && t <= R.UPPER_Z || t >= R.LOWER_A && t <= R.LOWER_Z || It(t); }
function Xr(t) { return t === R.EQUALS || Wr(t); }
var z;
(function (t) { t[t.EntityStart = 0] = "EntityStart", t[t.NumericStart = 1] = "NumericStart", t[t.NumericDecimal = 2] = "NumericDecimal", t[t.NumericHex = 3] = "NumericHex", t[t.NamedEntity = 4] = "NamedEntity"; })(z || (z = {}));
var K;
(function (t) { t[t.Legacy = 0] = "Legacy", t[t.Strict = 1] = "Strict", t[t.Attribute = 2] = "Attribute"; })(K || (K = {}));
var Ae = (function () {
    function Ae(e, u, r) {
        this.decodeTree = e, this.emitCodePoint = u, this.errors = r, this.state = z.EntityStart, this.consumed = 1, this.result = 0, this.treeIndex = 0, this.excess = 1, this.decodeMode = K.Strict;
    }
    Ae.prototype.startEntity = function (e) { this.decodeMode = e, this.state = z.EntityStart, this.result = 0, this.treeIndex = 0, this.excess = 1, this.consumed = 1; };
    Ae.prototype.write = function (e, u) { switch (this.state) {
        case z.EntityStart: return e.charCodeAt(u) === R.NUM ? (this.state = z.NumericStart, this.consumed += 1, this.stateNumericStart(e, u + 1)) : (this.state = z.NamedEntity, this.stateNamedEntity(e, u));
        case z.NumericStart: return this.stateNumericStart(e, u);
        case z.NumericDecimal: return this.stateNumericDecimal(e, u);
        case z.NumericHex: return this.stateNumericHex(e, u);
        case z.NamedEntity: return this.stateNamedEntity(e, u);
    } };
    Ae.prototype.stateNumericStart = function (e, u) { return u >= e.length ? -1 : (e.charCodeAt(u) | Gr) === R.LOWER_X ? (this.state = z.NumericHex, this.consumed += 1, this.stateNumericHex(e, u + 1)) : (this.state = z.NumericDecimal, this.stateNumericDecimal(e, u)); };
    Ae.prototype.addToNumericResult = function (e, u, r, i) { if (u !== r) {
        var s = r - u;
        this.result = this.result * Math.pow(i, s) + parseInt(e.substr(u, s), i), this.consumed += s;
    } };
    Ae.prototype.stateNumericHex = function (e, u) { var r = u; for (; u < e.length;) {
        var i = e.charCodeAt(u);
        if (It(i) || $r(i))
            u += 1;
        else
            return this.addToNumericResult(e, r, u, 16), this.emitNumericEntity(i, 3);
    } return this.addToNumericResult(e, r, u, 16), -1; };
    Ae.prototype.stateNumericDecimal = function (e, u) { var r = u; for (; u < e.length;) {
        var i = e.charCodeAt(u);
        if (It(i))
            u += 1;
        else
            return this.addToNumericResult(e, r, u, 10), this.emitNumericEntity(i, 2);
    } return this.addToNumericResult(e, r, u, 10), -1; };
    Ae.prototype.emitNumericEntity = function (e, u) { var r; if (this.consumed <= u)
        return (r = this.errors) === null || r === void 0 || r.absenceOfDigitsInNumericCharacterReference(this.consumed), 0; if (e === R.SEMI)
        this.consumed += 1;
    else if (this.decodeMode === K.Strict)
        return 0; return this.emitCodePoint(Ct(this.result), this.consumed), this.errors && (e !== R.SEMI && this.errors.missingSemicolonAfterCharacterReference(), this.errors.validateNumericCharacterReference(this.result)), this.consumed; };
    Ae.prototype.stateNamedEntity = function (e, u) { var r = this.decodeTree, i = r[this.treeIndex], s = (i & fe.VALUE_LENGTH) >> 14; for (; u < e.length; u++, this.excess++) {
        var d = e.charCodeAt(u);
        if (this.treeIndex = Qr(r, i, this.treeIndex + Math.max(1, s), d), this.treeIndex < 0)
            return this.result === 0 || this.decodeMode === K.Attribute && (s === 0 || Xr(d)) ? 0 : this.emitNotTerminatedNamedEntity();
        if (i = r[this.treeIndex], s = (i & fe.VALUE_LENGTH) >> 14, s !== 0) {
            if (d === R.SEMI)
                return this.emitNamedEntityData(this.treeIndex, s, this.consumed + this.excess);
            this.decodeMode !== K.Strict && (this.result = this.treeIndex, this.consumed += this.excess, this.excess = 0);
        }
    } return -1; };
    Ae.prototype.emitNotTerminatedNamedEntity = function () { var e; var _b = this, u = _b.result, r = _b.decodeTree, i = (r[u] & fe.VALUE_LENGTH) >> 14; return this.emitNamedEntityData(u, i, this.consumed), (e = this.errors) === null || e === void 0 || e.missingSemicolonAfterCharacterReference(), this.consumed; };
    Ae.prototype.emitNamedEntityData = function (e, u, r) { var i = this.decodeTree; return this.emitCodePoint(u === 1 ? i[e] & ~fe.VALUE_LENGTH : i[e + 1], r), u === 3 && this.emitCodePoint(i[e + 2], r), r; };
    Ae.prototype.end = function () { var e; switch (this.state) {
        case z.NamedEntity: return this.result !== 0 && (this.decodeMode !== K.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
        case z.NumericDecimal: return this.emitNumericEntity(0, 2);
        case z.NumericHex: return this.emitNumericEntity(0, 3);
        case z.NumericStart: return (e = this.errors) === null || e === void 0 || e.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
        case z.EntityStart: return 0;
    } };
    return Ae;
}());
function Cu(t) { var e = "", u = new Ae(t, function (r) { return e += Se(r); }); return function (i, s) { var d = 0, b = 0; for (; (b = i.indexOf("&", b)) >= 0;) {
    e += i.slice(d, b), u.startEntity(s);
    var g = u.write(i, b + 1);
    if (g < 0) {
        d = b + u.end();
        break;
    }
    d = b + g, b = g === 0 ? d + 1 : d;
} var p = e + i.slice(d); return e = "", p; }; }
function Qr(t, e, u, r) { var i = (e & fe.BRANCH_LENGTH) >> 7, s = e & fe.JUMP_TABLE; if (i === 0)
    return s !== 0 && r === s ? u : -1; if (s) {
    var p = r - s;
    return p < 0 || p >= i ? -1 : t[u + p] - 1;
} var d = u, b = d + i - 1; for (; d <= b;) {
    var p = d + b >>> 1, g = t[p];
    if (g < r)
        d = p + 1;
    else if (g > r)
        b = p - 1;
    else
        return t[p + i];
} return -1; }
var S0 = Cu(Ze), A0 = Cu(Je);
var I;
(function (t) { t[t.Tab = 9] = "Tab", t[t.NewLine = 10] = "NewLine", t[t.FormFeed = 12] = "FormFeed", t[t.CarriageReturn = 13] = "CarriageReturn", t[t.Space = 32] = "Space", t[t.ExclamationMark = 33] = "ExclamationMark", t[t.Number = 35] = "Number", t[t.Amp = 38] = "Amp", t[t.SingleQuote = 39] = "SingleQuote", t[t.DoubleQuote = 34] = "DoubleQuote", t[t.Dash = 45] = "Dash", t[t.Slash = 47] = "Slash", t[t.Zero = 48] = "Zero", t[t.Nine = 57] = "Nine", t[t.Semi = 59] = "Semi", t[t.Lt = 60] = "Lt", t[t.Eq = 61] = "Eq", t[t.Gt = 62] = "Gt", t[t.Questionmark = 63] = "Questionmark", t[t.UpperA = 65] = "UpperA", t[t.LowerA = 97] = "LowerA", t[t.UpperF = 70] = "UpperF", t[t.LowerF = 102] = "LowerF", t[t.UpperZ = 90] = "UpperZ", t[t.LowerZ = 122] = "LowerZ", t[t.LowerX = 120] = "LowerX", t[t.OpeningSquareBracket = 91] = "OpeningSquareBracket"; })(I || (I = {}));
var y;
(function (t) { t[t.Text = 1] = "Text", t[t.BeforeTagName = 2] = "BeforeTagName", t[t.InTagName = 3] = "InTagName", t[t.InSelfClosingTag = 4] = "InSelfClosingTag", t[t.BeforeClosingTagName = 5] = "BeforeClosingTagName", t[t.InClosingTagName = 6] = "InClosingTagName", t[t.AfterClosingTagName = 7] = "AfterClosingTagName", t[t.BeforeAttributeName = 8] = "BeforeAttributeName", t[t.InAttributeName = 9] = "InAttributeName", t[t.AfterAttributeName = 10] = "AfterAttributeName", t[t.BeforeAttributeValue = 11] = "BeforeAttributeValue", t[t.InAttributeValueDq = 12] = "InAttributeValueDq", t[t.InAttributeValueSq = 13] = "InAttributeValueSq", t[t.InAttributeValueNq = 14] = "InAttributeValueNq", t[t.BeforeDeclaration = 15] = "BeforeDeclaration", t[t.InDeclaration = 16] = "InDeclaration", t[t.InProcessingInstruction = 17] = "InProcessingInstruction", t[t.BeforeComment = 18] = "BeforeComment", t[t.CDATASequence = 19] = "CDATASequence", t[t.InSpecialComment = 20] = "InSpecialComment", t[t.InCommentLike = 21] = "InCommentLike", t[t.BeforeSpecialS = 22] = "BeforeSpecialS", t[t.BeforeSpecialT = 23] = "BeforeSpecialT", t[t.SpecialStartSequence = 24] = "SpecialStartSequence", t[t.InSpecialTag = 25] = "InSpecialTag", t[t.InEntity = 26] = "InEntity"; })(y || (y = {}));
function ne(t) { return t === I.Space || t === I.NewLine || t === I.Tab || t === I.FormFeed || t === I.CarriageReturn; }
function Ke(t) { return t === I.Slash || t === I.Gt || ne(t); }
function Zr(t) { return t >= I.LowerA && t <= I.LowerZ || t >= I.UpperA && t <= I.UpperZ; }
var Y;
(function (t) { t[t.NoValue = 0] = "NoValue", t[t.Unquoted = 1] = "Unquoted", t[t.Single = 2] = "Single", t[t.Double = 3] = "Double"; })(Y || (Y = {}));
var $ = { Cdata: new Uint8Array([67, 68, 65, 84, 65, 91]), CdataEnd: new Uint8Array([93, 93, 62]), CommentEnd: new Uint8Array([45, 45, 62]), ScriptEnd: new Uint8Array([60, 47, 115, 99, 114, 105, 112, 116]), StyleEnd: new Uint8Array([60, 47, 115, 116, 121, 108, 101]), TitleEnd: new Uint8Array([60, 47, 116, 105, 116, 108, 101]), TextareaEnd: new Uint8Array([60, 47, 116, 101, 120, 116, 97, 114, 101, 97]) }, Te = (function () {
    function Te(_b, r) {
        var _c = _b.xmlMode, e = _c === void 0 ? !1 : _c, _d = _b.decodeEntities, u = _d === void 0 ? !0 : _d;
        var _this = this;
        this.cbs = r, this.state = y.Text, this.buffer = "", this.sectionStart = 0, this.index = 0, this.entityStart = 0, this.baseState = y.Text, this.isSpecial = !1, this.running = !0, this.offset = 0, this.currentSequence = void 0, this.sequenceIndex = 0, this.xmlMode = e, this.decodeEntities = u, this.entityDecoder = new Ae(e ? Je : Ze, function (i, s) { return _this.emitCodePoint(i, s); });
    }
    Te.prototype.reset = function () { this.state = y.Text, this.buffer = "", this.sectionStart = 0, this.index = 0, this.baseState = y.Text, this.currentSequence = void 0, this.running = !0, this.offset = 0; };
    Te.prototype.write = function (e) { this.offset += this.buffer.length, this.buffer = e, this.parse(); };
    Te.prototype.end = function () { this.running && this.finish(); };
    Te.prototype.pause = function () { this.running = !1; };
    Te.prototype.resume = function () { this.running = !0, this.index < this.buffer.length + this.offset && this.parse(); };
    Te.prototype.stateText = function (e) { e === I.Lt || !this.decodeEntities && this.fastForwardTo(I.Lt) ? (this.index > this.sectionStart && this.cbs.ontext(this.sectionStart, this.index), this.state = y.BeforeTagName, this.sectionStart = this.index) : this.decodeEntities && e === I.Amp && this.startEntity(); };
    Te.prototype.stateSpecialStartSequence = function (e) { var u = this.sequenceIndex === this.currentSequence.length; if (!(u ? Ke(e) : (e | 32) === this.currentSequence[this.sequenceIndex]))
        this.isSpecial = !1;
    else if (!u) {
        this.sequenceIndex++;
        return;
    } this.sequenceIndex = 0, this.state = y.InTagName, this.stateInTagName(e); };
    Te.prototype.stateInSpecialTag = function (e) { if (this.sequenceIndex === this.currentSequence.length) {
        if (e === I.Gt || ne(e)) {
            var u = this.index - this.currentSequence.length;
            if (this.sectionStart < u) {
                var r = this.index;
                this.index = u, this.cbs.ontext(this.sectionStart, u), this.index = r;
            }
            this.isSpecial = !1, this.sectionStart = u + 2, this.stateInClosingTagName(e);
            return;
        }
        this.sequenceIndex = 0;
    } (e | 32) === this.currentSequence[this.sequenceIndex] ? this.sequenceIndex += 1 : this.sequenceIndex === 0 ? this.currentSequence === $.TitleEnd ? this.decodeEntities && e === I.Amp && this.startEntity() : this.fastForwardTo(I.Lt) && (this.sequenceIndex = 1) : this.sequenceIndex = +(e === I.Lt); };
    Te.prototype.stateCDATASequence = function (e) { e === $.Cdata[this.sequenceIndex] ? ++this.sequenceIndex === $.Cdata.length && (this.state = y.InCommentLike, this.currentSequence = $.CdataEnd, this.sequenceIndex = 0, this.sectionStart = this.index + 1) : (this.sequenceIndex = 0, this.state = y.InDeclaration, this.stateInDeclaration(e)); };
    Te.prototype.fastForwardTo = function (e) { for (; ++this.index < this.buffer.length + this.offset;)
        if (this.buffer.charCodeAt(this.index - this.offset) === e)
            return !0; return this.index = this.buffer.length + this.offset - 1, !1; };
    Te.prototype.stateInCommentLike = function (e) { e === this.currentSequence[this.sequenceIndex] ? ++this.sequenceIndex === this.currentSequence.length && (this.currentSequence === $.CdataEnd ? this.cbs.oncdata(this.sectionStart, this.index, 2) : this.cbs.oncomment(this.sectionStart, this.index, 2), this.sequenceIndex = 0, this.sectionStart = this.index + 1, this.state = y.Text) : this.sequenceIndex === 0 ? this.fastForwardTo(this.currentSequence[0]) && (this.sequenceIndex = 1) : e !== this.currentSequence[this.sequenceIndex - 1] && (this.sequenceIndex = 0); };
    Te.prototype.isTagStartChar = function (e) { return this.xmlMode ? !Ke(e) : Zr(e); };
    Te.prototype.startSpecial = function (e, u) { this.isSpecial = !0, this.currentSequence = e, this.sequenceIndex = u, this.state = y.SpecialStartSequence; };
    Te.prototype.stateBeforeTagName = function (e) { if (e === I.ExclamationMark)
        this.state = y.BeforeDeclaration, this.sectionStart = this.index + 1;
    else if (e === I.Questionmark)
        this.state = y.InProcessingInstruction, this.sectionStart = this.index + 1;
    else if (this.isTagStartChar(e)) {
        var u = e | 32;
        this.sectionStart = this.index, this.xmlMode ? this.state = y.InTagName : u === $.ScriptEnd[2] ? this.state = y.BeforeSpecialS : u === $.TitleEnd[2] ? this.state = y.BeforeSpecialT : this.state = y.InTagName;
    }
    else
        e === I.Slash ? this.state = y.BeforeClosingTagName : (this.state = y.Text, this.stateText(e)); };
    Te.prototype.stateInTagName = function (e) { Ke(e) && (this.cbs.onopentagname(this.sectionStart, this.index), this.sectionStart = -1, this.state = y.BeforeAttributeName, this.stateBeforeAttributeName(e)); };
    Te.prototype.stateBeforeClosingTagName = function (e) { ne(e) || (e === I.Gt ? this.state = y.Text : (this.state = this.isTagStartChar(e) ? y.InClosingTagName : y.InSpecialComment, this.sectionStart = this.index)); };
    Te.prototype.stateInClosingTagName = function (e) { (e === I.Gt || ne(e)) && (this.cbs.onclosetag(this.sectionStart, this.index), this.sectionStart = -1, this.state = y.AfterClosingTagName, this.stateAfterClosingTagName(e)); };
    Te.prototype.stateAfterClosingTagName = function (e) { (e === I.Gt || this.fastForwardTo(I.Gt)) && (this.state = y.Text, this.sectionStart = this.index + 1); };
    Te.prototype.stateBeforeAttributeName = function (e) { e === I.Gt ? (this.cbs.onopentagend(this.index), this.isSpecial ? (this.state = y.InSpecialTag, this.sequenceIndex = 0) : this.state = y.Text, this.sectionStart = this.index + 1) : e === I.Slash ? this.state = y.InSelfClosingTag : ne(e) || (this.state = y.InAttributeName, this.sectionStart = this.index); };
    Te.prototype.stateInSelfClosingTag = function (e) { e === I.Gt ? (this.cbs.onselfclosingtag(this.index), this.state = y.Text, this.sectionStart = this.index + 1, this.isSpecial = !1) : ne(e) || (this.state = y.BeforeAttributeName, this.stateBeforeAttributeName(e)); };
    Te.prototype.stateInAttributeName = function (e) { (e === I.Eq || Ke(e)) && (this.cbs.onattribname(this.sectionStart, this.index), this.sectionStart = this.index, this.state = y.AfterAttributeName, this.stateAfterAttributeName(e)); };
    Te.prototype.stateAfterAttributeName = function (e) { e === I.Eq ? this.state = y.BeforeAttributeValue : e === I.Slash || e === I.Gt ? (this.cbs.onattribend(Y.NoValue, this.sectionStart), this.sectionStart = -1, this.state = y.BeforeAttributeName, this.stateBeforeAttributeName(e)) : ne(e) || (this.cbs.onattribend(Y.NoValue, this.sectionStart), this.state = y.InAttributeName, this.sectionStart = this.index); };
    Te.prototype.stateBeforeAttributeValue = function (e) { e === I.DoubleQuote ? (this.state = y.InAttributeValueDq, this.sectionStart = this.index + 1) : e === I.SingleQuote ? (this.state = y.InAttributeValueSq, this.sectionStart = this.index + 1) : ne(e) || (this.sectionStart = this.index, this.state = y.InAttributeValueNq, this.stateInAttributeValueNoQuotes(e)); };
    Te.prototype.handleInAttributeValue = function (e, u) { e === u || !this.decodeEntities && this.fastForwardTo(u) ? (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(u === I.DoubleQuote ? Y.Double : Y.Single, this.index + 1), this.state = y.BeforeAttributeName) : this.decodeEntities && e === I.Amp && this.startEntity(); };
    Te.prototype.stateInAttributeValueDoubleQuotes = function (e) { this.handleInAttributeValue(e, I.DoubleQuote); };
    Te.prototype.stateInAttributeValueSingleQuotes = function (e) { this.handleInAttributeValue(e, I.SingleQuote); };
    Te.prototype.stateInAttributeValueNoQuotes = function (e) { ne(e) || e === I.Gt ? (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(Y.Unquoted, this.index), this.state = y.BeforeAttributeName, this.stateBeforeAttributeName(e)) : this.decodeEntities && e === I.Amp && this.startEntity(); };
    Te.prototype.stateBeforeDeclaration = function (e) { e === I.OpeningSquareBracket ? (this.state = y.CDATASequence, this.sequenceIndex = 0) : this.state = e === I.Dash ? y.BeforeComment : y.InDeclaration; };
    Te.prototype.stateInDeclaration = function (e) { (e === I.Gt || this.fastForwardTo(I.Gt)) && (this.cbs.ondeclaration(this.sectionStart, this.index), this.state = y.Text, this.sectionStart = this.index + 1); };
    Te.prototype.stateInProcessingInstruction = function (e) { (e === I.Gt || this.fastForwardTo(I.Gt)) && (this.cbs.onprocessinginstruction(this.sectionStart, this.index), this.state = y.Text, this.sectionStart = this.index + 1); };
    Te.prototype.stateBeforeComment = function (e) { e === I.Dash ? (this.state = y.InCommentLike, this.currentSequence = $.CommentEnd, this.sequenceIndex = 2, this.sectionStart = this.index + 1) : this.state = y.InDeclaration; };
    Te.prototype.stateInSpecialComment = function (e) { (e === I.Gt || this.fastForwardTo(I.Gt)) && (this.cbs.oncomment(this.sectionStart, this.index, 0), this.state = y.Text, this.sectionStart = this.index + 1); };
    Te.prototype.stateBeforeSpecialS = function (e) { var u = e | 32; u === $.ScriptEnd[3] ? this.startSpecial($.ScriptEnd, 4) : u === $.StyleEnd[3] ? this.startSpecial($.StyleEnd, 4) : (this.state = y.InTagName, this.stateInTagName(e)); };
    Te.prototype.stateBeforeSpecialT = function (e) { var u = e | 32; u === $.TitleEnd[3] ? this.startSpecial($.TitleEnd, 4) : u === $.TextareaEnd[3] ? this.startSpecial($.TextareaEnd, 4) : (this.state = y.InTagName, this.stateInTagName(e)); };
    Te.prototype.startEntity = function () { this.baseState = this.state, this.state = y.InEntity, this.entityStart = this.index, this.entityDecoder.startEntity(this.xmlMode ? K.Strict : this.baseState === y.Text || this.baseState === y.InSpecialTag ? K.Legacy : K.Attribute); };
    Te.prototype.stateInEntity = function () { var e = this.entityDecoder.write(this.buffer, this.index - this.offset); e >= 0 ? (this.state = this.baseState, e === 0 && (this.index = this.entityStart)) : this.index = this.offset + this.buffer.length - 1; };
    Te.prototype.cleanup = function () { this.running && this.sectionStart !== this.index && (this.state === y.Text || this.state === y.InSpecialTag && this.sequenceIndex === 0 ? (this.cbs.ontext(this.sectionStart, this.index), this.sectionStart = this.index) : (this.state === y.InAttributeValueDq || this.state === y.InAttributeValueSq || this.state === y.InAttributeValueNq) && (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = this.index)); };
    Te.prototype.shouldContinue = function () { return this.index < this.buffer.length + this.offset && this.running; };
    Te.prototype.parse = function () { for (; this.shouldContinue();) {
        var e = this.buffer.charCodeAt(this.index - this.offset);
        switch (this.state) {
            case y.Text: {
                this.stateText(e);
                break;
            }
            case y.SpecialStartSequence: {
                this.stateSpecialStartSequence(e);
                break;
            }
            case y.InSpecialTag: {
                this.stateInSpecialTag(e);
                break;
            }
            case y.CDATASequence: {
                this.stateCDATASequence(e);
                break;
            }
            case y.InAttributeValueDq: {
                this.stateInAttributeValueDoubleQuotes(e);
                break;
            }
            case y.InAttributeName: {
                this.stateInAttributeName(e);
                break;
            }
            case y.InCommentLike: {
                this.stateInCommentLike(e);
                break;
            }
            case y.InSpecialComment: {
                this.stateInSpecialComment(e);
                break;
            }
            case y.BeforeAttributeName: {
                this.stateBeforeAttributeName(e);
                break;
            }
            case y.InTagName: {
                this.stateInTagName(e);
                break;
            }
            case y.InClosingTagName: {
                this.stateInClosingTagName(e);
                break;
            }
            case y.BeforeTagName: {
                this.stateBeforeTagName(e);
                break;
            }
            case y.AfterAttributeName: {
                this.stateAfterAttributeName(e);
                break;
            }
            case y.InAttributeValueSq: {
                this.stateInAttributeValueSingleQuotes(e);
                break;
            }
            case y.BeforeAttributeValue: {
                this.stateBeforeAttributeValue(e);
                break;
            }
            case y.BeforeClosingTagName: {
                this.stateBeforeClosingTagName(e);
                break;
            }
            case y.AfterClosingTagName: {
                this.stateAfterClosingTagName(e);
                break;
            }
            case y.BeforeSpecialS: {
                this.stateBeforeSpecialS(e);
                break;
            }
            case y.BeforeSpecialT: {
                this.stateBeforeSpecialT(e);
                break;
            }
            case y.InAttributeValueNq: {
                this.stateInAttributeValueNoQuotes(e);
                break;
            }
            case y.InSelfClosingTag: {
                this.stateInSelfClosingTag(e);
                break;
            }
            case y.InDeclaration: {
                this.stateInDeclaration(e);
                break;
            }
            case y.BeforeDeclaration: {
                this.stateBeforeDeclaration(e);
                break;
            }
            case y.BeforeComment: {
                this.stateBeforeComment(e);
                break;
            }
            case y.InProcessingInstruction: {
                this.stateInProcessingInstruction(e);
                break;
            }
            case y.InEntity: {
                this.stateInEntity();
                break;
            }
        }
        this.index++;
    } this.cleanup(); };
    Te.prototype.finish = function () { this.state === y.InEntity && (this.entityDecoder.end(), this.state = this.baseState), this.handleTrailingData(), this.cbs.onend(); };
    Te.prototype.handleTrailingData = function () { var e = this.buffer.length + this.offset; this.sectionStart >= e || (this.state === y.InCommentLike ? this.currentSequence === $.CdataEnd ? this.cbs.oncdata(this.sectionStart, e, 0) : this.cbs.oncomment(this.sectionStart, e, 0) : this.state === y.InTagName || this.state === y.BeforeAttributeName || this.state === y.BeforeAttributeValue || this.state === y.AfterAttributeName || this.state === y.InAttributeName || this.state === y.InAttributeValueSq || this.state === y.InAttributeValueDq || this.state === y.InAttributeValueNq || this.state === y.InClosingTagName || this.cbs.ontext(this.sectionStart, e)); };
    Te.prototype.emitCodePoint = function (e, u) { this.baseState !== y.Text && this.baseState !== y.InSpecialTag ? (this.sectionStart < this.entityStart && this.cbs.onattribdata(this.sectionStart, this.entityStart), this.sectionStart = this.entityStart + u, this.index = this.sectionStart - 1, this.cbs.onattribentity(e)) : (this.sectionStart < this.entityStart && this.cbs.ontext(this.sectionStart, this.entityStart), this.sectionStart = this.entityStart + u, this.index = this.sectionStart - 1, this.cbs.ontextentity(e, this.sectionStart)); };
    return Te;
}());
var Ee = new Set(["input", "option", "optgroup", "select", "button", "datalist", "textarea"]), M = new Set(["p"]), Iu = new Set(["thead", "tbody"]), Du = new Set(["dd", "dt"]), Lu = new Set(["rt", "rp"]), Jr = new Map([["tr", new Set(["tr", "th", "td"])], ["th", new Set(["th"])], ["td", new Set(["thead", "th", "td"])], ["body", new Set(["head", "link", "script"])], ["li", new Set(["li"])], ["p", M], ["h1", M], ["h2", M], ["h3", M], ["h4", M], ["h5", M], ["h6", M], ["select", Ee], ["input", Ee], ["output", Ee], ["button", Ee], ["datalist", Ee], ["textarea", Ee], ["option", new Set(["option"])], ["optgroup", new Set(["optgroup", "option"])], ["dd", Du], ["dt", Du], ["address", M], ["article", M], ["aside", M], ["blockquote", M], ["details", M], ["div", M], ["dl", M], ["fieldset", M], ["figcaption", M], ["figure", M], ["footer", M], ["form", M], ["header", M], ["hr", M], ["main", M], ["nav", M], ["ol", M], ["pre", M], ["section", M], ["table", M], ["ul", M], ["rt", Lu], ["rp", Lu], ["tbody", Iu], ["tfoot", Iu]]), Kr = new Set(["area", "base", "basefont", "br", "col", "command", "embed", "frame", "hr", "img", "input", "isindex", "keygen", "link", "meta", "param", "source", "track", "wbr"]), Ou = new Set(["math", "svg"]), Uu = new Set(["mi", "mo", "mn", "ms", "mtext", "annotation-xml", "foreignobject", "desc", "title"]), Yr = /\s|\//, Me = (function () {
    function Me(e, u) {
        if (u === void 0) { u = {}; }
        var r, i, s, d, b, p;
        this.options = u, this.startIndex = 0, this.endIndex = 0, this.openTagStart = 0, this.tagname = "", this.attribname = "", this.attribvalue = "", this.attribs = null, this.stack = [], this.buffers = [], this.bufferOffset = 0, this.writeIndex = 0, this.ended = !1, this.cbs = e != null ? e : {}, this.htmlMode = !this.options.xmlMode, this.lowerCaseTagNames = (r = u.lowerCaseTags) !== null && r !== void 0 ? r : this.htmlMode, this.lowerCaseAttributeNames = (i = u.lowerCaseAttributeNames) !== null && i !== void 0 ? i : this.htmlMode, this.recognizeSelfClosing = (s = u.recognizeSelfClosing) !== null && s !== void 0 ? s : !this.htmlMode, this.tokenizer = new ((d = u.Tokenizer) !== null && d !== void 0 ? d : Te)(this.options, this), this.foreignContext = [!this.htmlMode], (p = (b = this.cbs).onparserinit) === null || p === void 0 || p.call(b, this);
    }
    Me.prototype.ontext = function (e, u) { var r, i; var s = this.getSlice(e, u); this.endIndex = u - 1, (i = (r = this.cbs).ontext) === null || i === void 0 || i.call(r, s), this.startIndex = u; };
    Me.prototype.ontextentity = function (e, u) { var r, i; this.endIndex = u - 1, (i = (r = this.cbs).ontext) === null || i === void 0 || i.call(r, Se(e)), this.startIndex = u; };
    Me.prototype.isVoidElement = function (e) { return this.htmlMode && Kr.has(e); };
    Me.prototype.onopentagname = function (e, u) { this.endIndex = u; var r = this.getSlice(e, u); this.lowerCaseTagNames && (r = r.toLowerCase()), this.emitOpenTag(r); };
    Me.prototype.emitOpenTag = function (e) { var u, r, i, s; this.openTagStart = this.startIndex, this.tagname = e; var d = this.htmlMode && Jr.get(e); if (d)
        for (; this.stack.length > 0 && d.has(this.stack[0]);) {
            var b = this.stack.shift();
            (r = (u = this.cbs).onclosetag) === null || r === void 0 || r.call(u, b, !0);
        } this.isVoidElement(e) || (this.stack.unshift(e), this.htmlMode && (Ou.has(e) ? this.foreignContext.unshift(!0) : Uu.has(e) && this.foreignContext.unshift(!1))), (s = (i = this.cbs).onopentagname) === null || s === void 0 || s.call(i, e), this.cbs.onopentag && (this.attribs = {}); };
    Me.prototype.endOpenTag = function (e) { var u, r; this.startIndex = this.openTagStart, this.attribs && ((r = (u = this.cbs).onopentag) === null || r === void 0 || r.call(u, this.tagname, this.attribs, e), this.attribs = null), this.cbs.onclosetag && this.isVoidElement(this.tagname) && this.cbs.onclosetag(this.tagname, !0), this.tagname = ""; };
    Me.prototype.onopentagend = function (e) { this.endIndex = e, this.endOpenTag(!1), this.startIndex = e + 1; };
    Me.prototype.onclosetag = function (e, u) { var r, i, s, d, b, p, g, A; this.endIndex = u; var D = this.getSlice(e, u); if (this.lowerCaseTagNames && (D = D.toLowerCase()), this.htmlMode && (Ou.has(D) || Uu.has(D)) && this.foreignContext.shift(), this.isVoidElement(D))
        this.htmlMode && D === "br" && ((d = (s = this.cbs).onopentagname) === null || d === void 0 || d.call(s, "br"), (p = (b = this.cbs).onopentag) === null || p === void 0 || p.call(b, "br", {}, !0), (A = (g = this.cbs).onclosetag) === null || A === void 0 || A.call(g, "br", !1));
    else {
        var N = this.stack.indexOf(D);
        if (N !== -1)
            for (var q = 0; q <= N; q++) {
                var L = this.stack.shift();
                (i = (r = this.cbs).onclosetag) === null || i === void 0 || i.call(r, L, q !== N);
            }
        else
            this.htmlMode && D === "p" && (this.emitOpenTag("p"), this.closeCurrentTag(!0));
    } this.startIndex = u + 1; };
    Me.prototype.onselfclosingtag = function (e) { this.endIndex = e, this.recognizeSelfClosing || this.foreignContext[0] ? (this.closeCurrentTag(!1), this.startIndex = e + 1) : this.onopentagend(e); };
    Me.prototype.closeCurrentTag = function (e) { var u, r; var i = this.tagname; this.endOpenTag(e), this.stack[0] === i && ((r = (u = this.cbs).onclosetag) === null || r === void 0 || r.call(u, i, !e), this.stack.shift()); };
    Me.prototype.onattribname = function (e, u) { this.startIndex = e; var r = this.getSlice(e, u); this.attribname = this.lowerCaseAttributeNames ? r.toLowerCase() : r; };
    Me.prototype.onattribdata = function (e, u) { this.attribvalue += this.getSlice(e, u); };
    Me.prototype.onattribentity = function (e) { this.attribvalue += Se(e); };
    Me.prototype.onattribend = function (e, u) { var r, i; this.endIndex = u, (i = (r = this.cbs).onattribute) === null || i === void 0 || i.call(r, this.attribname, this.attribvalue, e === Y.Double ? '"' : e === Y.Single ? "'" : e === Y.NoValue ? void 0 : null), this.attribs && !Object.prototype.hasOwnProperty.call(this.attribs, this.attribname) && (this.attribs[this.attribname] = this.attribvalue), this.attribvalue = ""; };
    Me.prototype.getInstructionName = function (e) { var u = e.search(Yr), r = u < 0 ? e : e.substr(0, u); return this.lowerCaseTagNames && (r = r.toLowerCase()), r; };
    Me.prototype.ondeclaration = function (e, u) { this.endIndex = u; var r = this.getSlice(e, u); if (this.cbs.onprocessinginstruction) {
        var i = this.getInstructionName(r);
        this.cbs.onprocessinginstruction("!".concat(i), "!".concat(r));
    } this.startIndex = u + 1; };
    Me.prototype.onprocessinginstruction = function (e, u) { this.endIndex = u; var r = this.getSlice(e, u); if (this.cbs.onprocessinginstruction) {
        var i = this.getInstructionName(r);
        this.cbs.onprocessinginstruction("?".concat(i), "?".concat(r));
    } this.startIndex = u + 1; };
    Me.prototype.oncomment = function (e, u, r) { var i, s, d, b; this.endIndex = u, (s = (i = this.cbs).oncomment) === null || s === void 0 || s.call(i, this.getSlice(e, u - r)), (b = (d = this.cbs).oncommentend) === null || b === void 0 || b.call(d), this.startIndex = u + 1; };
    Me.prototype.oncdata = function (e, u, r) { var i, s, d, b, p, g, A, D, N, q; this.endIndex = u; var L = this.getSlice(e, u - r); !this.htmlMode || this.options.recognizeCDATA ? ((s = (i = this.cbs).oncdatastart) === null || s === void 0 || s.call(i), (b = (d = this.cbs).ontext) === null || b === void 0 || b.call(d, L), (g = (p = this.cbs).oncdataend) === null || g === void 0 || g.call(p)) : ((D = (A = this.cbs).oncomment) === null || D === void 0 || D.call(A, "[CDATA[".concat(L, "]]")), (q = (N = this.cbs).oncommentend) === null || q === void 0 || q.call(N)), this.startIndex = u + 1; };
    Me.prototype.onend = function () { var e, u; if (this.cbs.onclosetag) {
        this.endIndex = this.startIndex;
        for (var r = 0; r < this.stack.length; r++)
            this.cbs.onclosetag(this.stack[r], !0);
    } (u = (e = this.cbs).onend) === null || u === void 0 || u.call(e); };
    Me.prototype.reset = function () { var e, u, r, i; (u = (e = this.cbs).onreset) === null || u === void 0 || u.call(e), this.tokenizer.reset(), this.tagname = "", this.attribname = "", this.attribs = null, this.stack.length = 0, this.startIndex = 0, this.endIndex = 0, (i = (r = this.cbs).onparserinit) === null || i === void 0 || i.call(r, this), this.buffers.length = 0, this.foreignContext.length = 0, this.foreignContext.unshift(!this.htmlMode), this.bufferOffset = 0, this.writeIndex = 0, this.ended = !1; };
    Me.prototype.parseComplete = function (e) { this.reset(), this.end(e); };
    Me.prototype.getSlice = function (e, u) { for (; e - this.bufferOffset >= this.buffers[0].length;)
        this.shiftBuffer(); var r = this.buffers[0].slice(e - this.bufferOffset, u - this.bufferOffset); for (; u - this.bufferOffset > this.buffers[0].length;)
        this.shiftBuffer(), r += this.buffers[0].slice(0, u - this.bufferOffset); return r; };
    Me.prototype.shiftBuffer = function () { this.bufferOffset += this.buffers[0].length, this.writeIndex--, this.buffers.shift(); };
    Me.prototype.write = function (e) { var u, r; if (this.ended) {
        (r = (u = this.cbs).onerror) === null || r === void 0 || r.call(u, new Error(".write() after done!"));
        return;
    } this.buffers.push(e), this.tokenizer.running && (this.tokenizer.write(e), this.writeIndex++); };
    Me.prototype.end = function (e) { var u, r; if (this.ended) {
        (r = (u = this.cbs).onerror) === null || r === void 0 || r.call(u, new Error(".end() after done!"));
        return;
    } e && this.write(e), this.ended = !0, this.tokenizer.end(); };
    Me.prototype.pause = function () { this.tokenizer.pause(); };
    Me.prototype.resume = function () { for (this.tokenizer.resume(); this.tokenizer.running && this.writeIndex < this.buffers.length;)
        this.tokenizer.write(this.buffers[this.writeIndex++]); this.ended && this.tokenizer.end(); };
    Me.prototype.parseChunk = function (e) { this.write(e); };
    Me.prototype.done = function (e) { this.end(e); };
    return Me;
}());
var Ye = {};
Nt(Ye, { CDATA: function () { return _t; }, Comment: function () { return Pt; }, Directive: function () { return Ut; }, Doctype: function () { return Ft; }, ElementType: function () { return O; }, Root: function () { return Lt; }, Script: function () { return Mt; }, Style: function () { return Bt; }, Tag: function () { return Ht; }, Text: function () { return Ot; }, isTag: function () { return Dt; } });
var O;
(function (t) { t.Root = "root", t.Text = "text", t.Directive = "directive", t.Comment = "comment", t.Script = "script", t.Style = "style", t.Tag = "tag", t.CDATA = "cdata", t.Doctype = "doctype"; })(O || (O = {}));
function Dt(t) { return t.type === O.Tag || t.type === O.Script || t.type === O.Style; }
var Lt = O.Root, Ot = O.Text, Ut = O.Directive, Pt = O.Comment, Mt = O.Script, Bt = O.Style, Ht = O.Tag, _t = O.CDATA, Ft = O.Doctype;
var et = (function () {
    function et() {
        this.parent = null, this.prev = null, this.next = null, this.startIndex = null, this.endIndex = null;
    }
    Object.defineProperty(et.prototype, "parentNode", {
        get: function () { return this.parent; },
        set: function (e) { this.parent = e; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(et.prototype, "previousSibling", {
        get: function () { return this.prev; },
        set: function (e) { this.prev = e; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(et.prototype, "nextSibling", {
        get: function () { return this.next; },
        set: function (e) { this.next = e; },
        enumerable: false,
        configurable: true
    });
    et.prototype.cloneNode = function (e) {
        if (e === void 0) { e = !1; }
        return Pu(this, e);
    };
    return et;
}()), Be = (function (_super) {
    __extends(Be, _super);
    function Be(e) {
        var _this = this;
        _this = _super.call(this) || this, _this.data = e;
        return _this;
    }
    Object.defineProperty(Be.prototype, "nodeValue", {
        get: function () { return this.data; },
        set: function (e) { this.data = e; },
        enumerable: false,
        configurable: true
    });
    return Be;
}(et)), ke = (function (_super) {
    __extends(ke, _super);
    function ke() {
        var _this = this;
        _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this, _this.type = O.Text;
        return _this;
    }
    Object.defineProperty(ke.prototype, "nodeType", {
        get: function () { return 3; },
        enumerable: false,
        configurable: true
    });
    return ke;
}(Be)), He = (function (_super) {
    __extends(He, _super);
    function He() {
        var _this = this;
        _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this, _this.type = O.Comment;
        return _this;
    }
    Object.defineProperty(He.prototype, "nodeType", {
        get: function () { return 8; },
        enumerable: false,
        configurable: true
    });
    return He;
}(Be)), _e = (function (_super) {
    __extends(_e, _super);
    function _e(e, u) {
        var _this = this;
        _this = _super.call(this, u) || this, _this.name = e, _this.type = O.Directive;
        return _this;
    }
    Object.defineProperty(_e.prototype, "nodeType", {
        get: function () { return 1; },
        enumerable: false,
        configurable: true
    });
    return _e;
}(Be)), Fe = (function (_super) {
    __extends(Fe, _super);
    function Fe(e) {
        var _this = this;
        _this = _super.call(this) || this, _this.children = e;
        return _this;
    }
    Object.defineProperty(Fe.prototype, "firstChild", {
        get: function () { var e; return (e = this.children[0]) !== null && e !== void 0 ? e : null; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Fe.prototype, "lastChild", {
        get: function () { return this.children.length > 0 ? this.children[this.children.length - 1] : null; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Fe.prototype, "childNodes", {
        get: function () { return this.children; },
        set: function (e) { this.children = e; },
        enumerable: false,
        configurable: true
    });
    return Fe;
}(et)), Ve = (function (_super) {
    __extends(Ve, _super);
    function Ve() {
        var _this = this;
        _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this, _this.type = O.CDATA;
        return _this;
    }
    Object.defineProperty(Ve.prototype, "nodeType", {
        get: function () { return 4; },
        enumerable: false,
        configurable: true
    });
    return Ve;
}(Fe)), Ne = (function (_super) {
    __extends(Ne, _super);
    function Ne() {
        var _this = this;
        _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this, _this.type = O.Root;
        return _this;
    }
    Object.defineProperty(Ne.prototype, "nodeType", {
        get: function () { return 9; },
        enumerable: false,
        configurable: true
    });
    return Ne;
}(Fe)), ze = (function (_super) {
    __extends(ze, _super);
    function ze(e, u, r, i) {
        if (r === void 0) { r = []; }
        if (i === void 0) { i = e === "script" ? O.Script : e === "style" ? O.Style : O.Tag; }
        var _this = this;
        _this = _super.call(this, r) || this, _this.name = e, _this.attribs = u, _this.type = i;
        return _this;
    }
    Object.defineProperty(ze.prototype, "nodeType", {
        get: function () { return 1; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ze.prototype, "tagName", {
        get: function () { return this.name; },
        set: function (e) { this.name = e; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ze.prototype, "attributes", {
        get: function () {
            var _this = this;
            return Object.keys(this.attribs).map(function (e) { var u, r; return { name: e, value: _this.attribs[e], namespace: (u = _this["x-attribsNamespace"]) === null || u === void 0 ? void 0 : u[e], prefix: (r = _this["x-attribsPrefix"]) === null || r === void 0 ? void 0 : r[e] }; });
        },
        enumerable: false,
        configurable: true
    });
    return ze;
}(Fe));
function P(t) { return Dt(t); }
function qe(t) { return t.type === O.CDATA; }
function re(t) { return t.type === O.Text; }
function Re(t) { return t.type === O.Comment; }
function ea(t) { return t.type === O.Directive; }
function zt(t) { return t.type === O.Root; }
function W(t) { return Object.prototype.hasOwnProperty.call(t, "children"); }
function Pu(t, e) {
    if (e === void 0) { e = !1; }
    var u;
    if (re(t))
        u = new ke(t.data);
    else if (Re(t))
        u = new He(t.data);
    else if (P(t)) {
        var r = e ? Vt(t.children) : [], i_1 = new ze(t.name, ue({}, t.attribs), r);
        r.forEach(function (s) { return s.parent = i_1; }), t.namespace != null && (i_1.namespace = t.namespace), t["x-attribsNamespace"] && (i_1["x-attribsNamespace"] = ue({}, t["x-attribsNamespace"])), t["x-attribsPrefix"] && (i_1["x-attribsPrefix"] = ue({}, t["x-attribsPrefix"])), u = i_1;
    }
    else if (qe(t)) {
        var r = e ? Vt(t.children) : [], i_2 = new Ve(r);
        r.forEach(function (s) { return s.parent = i_2; }), u = i_2;
    }
    else if (zt(t)) {
        var r = e ? Vt(t.children) : [], i_3 = new Ne(r);
        r.forEach(function (s) { return s.parent = i_3; }), t["x-mode"] && (i_3["x-mode"] = t["x-mode"]), u = i_3;
    }
    else if (ea(t)) {
        var r = new _e(t.name, t.data);
        t["x-name"] != null && (r["x-name"] = t["x-name"], r["x-publicId"] = t["x-publicId"], r["x-systemId"] = t["x-systemId"]), u = r;
    }
    else
        throw new Error("Not implemented yet: ".concat(t.type));
    return u.startIndex = t.startIndex, u.endIndex = t.endIndex, t.sourceCodeLocation != null && (u.sourceCodeLocation = t.sourceCodeLocation), u;
}
function Vt(t) { var e = t.map(function (u) { return Pu(u, !0); }); for (var u = 1; u < e.length; u++)
    e[u].prev = e[u - 1], e[u - 1].next = e[u]; return e; }
var Mu = { withStartIndices: !1, withEndIndices: !1, xmlMode: !1 }, Ce = (function () {
    function Ce(e, u, r) {
        this.dom = [], this.root = new Ne(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null, typeof u == "function" && (r = u, u = Mu), typeof e == "object" && (u = e, e = void 0), this.callback = e != null ? e : null, this.options = u != null ? u : Mu, this.elementCB = r != null ? r : null;
    }
    Ce.prototype.onparserinit = function (e) { this.parser = e; };
    Ce.prototype.onreset = function () { this.dom = [], this.root = new Ne(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null; };
    Ce.prototype.onend = function () { this.done || (this.done = !0, this.parser = null, this.handleCallback(null)); };
    Ce.prototype.onerror = function (e) { this.handleCallback(e); };
    Ce.prototype.onclosetag = function () { this.lastNode = null; var e = this.tagStack.pop(); this.options.withEndIndices && (e.endIndex = this.parser.endIndex), this.elementCB && this.elementCB(e); };
    Ce.prototype.onopentag = function (e, u) { var r = this.options.xmlMode ? O.Tag : void 0, i = new ze(e, u, void 0, r); this.addNode(i), this.tagStack.push(i); };
    Ce.prototype.ontext = function (e) { var u = this.lastNode; if (u && u.type === O.Text)
        u.data += e, this.options.withEndIndices && (u.endIndex = this.parser.endIndex);
    else {
        var r = new ke(e);
        this.addNode(r), this.lastNode = r;
    } };
    Ce.prototype.oncomment = function (e) { if (this.lastNode && this.lastNode.type === O.Comment) {
        this.lastNode.data += e;
        return;
    } var u = new He(e); this.addNode(u), this.lastNode = u; };
    Ce.prototype.oncommentend = function () { this.lastNode = null; };
    Ce.prototype.oncdatastart = function () { var e = new ke(""), u = new Ve([e]); this.addNode(u), e.parent = u, this.lastNode = e; };
    Ce.prototype.oncdataend = function () { this.lastNode = null; };
    Ce.prototype.onprocessinginstruction = function (e, u) { var r = new _e(e, u); this.addNode(r); };
    Ce.prototype.handleCallback = function (e) { if (typeof this.callback == "function")
        this.callback(e, this.dom);
    else if (e)
        throw e; };
    Ce.prototype.addNode = function (e) { var u = this.tagStack[this.tagStack.length - 1], r = u.children[u.children.length - 1]; this.options.withStartIndices && (e.startIndex = this.parser.startIndex), this.options.withEndIndices && (e.endIndex = this.parser.endIndex), u.children.push(e), r && (e.prev = r, r.next = e), e.parent = u, this.lastNode = null; };
    return Ce;
}());
var ae = {};
Nt(ae, { DocumentPosition: function () { return ee; }, append: function () { return wa; }, appendChild: function () { return va; }, compareDocumentPosition: function () { return Ju; }, existsOne: function () { return Qu; }, filter: function () { return De; }, find: function () { return st; }, findAll: function () { return Aa; }, findOne: function () { return ct; }, findOneChild: function () { return Sa; }, getAttributeValue: function () { return pa; }, getChildren: function () { return it; }, getElementById: function () { return Na; }, getElements: function () { return ka; }, getElementsByClassName: function () { return qa; }, getElementsByTagName: function () { return me; }, getElementsByTagType: function () { return Ca; }, getFeed: function () { return eu; }, getInnerHTML: function () { return ba; }, getName: function () { return ma; }, getOuterHTML: function () { return Wu; }, getParent: function () { return Xu; }, getSiblings: function () { return nt; }, getText: function () { return at; }, hasAttrib: function () { return ga; }, hasChildren: function () { return W; }, innerText: function () { return Xt; }, isCDATA: function () { return qe; }, isComment: function () { return Re; }, isDocument: function () { return zt; }, isTag: function () { return P; }, isText: function () { return re; }, nextElementSibling: function () { return Qt; }, prepend: function () { return Jt; }, prependChild: function () { return ya; }, prevElementSibling: function () { return Zt; }, removeElement: function () { return se; }, removeSubsets: function () { return Ia; }, replaceElement: function () { return xa; }, testElement: function () { return Ea; }, textContent: function () { return le; }, uniqueSort: function () { return Yt; } });
function tt(t) { for (var e = 1; e < t.length; e++)
    t[e][0] += t[e - 1][0] + 1; return t; }
var ta = new Map(tt([[9, "&Tab;"], [0, "&NewLine;"], [22, "&excl;"], [0, "&quot;"], [0, "&num;"], [0, "&dollar;"], [0, "&percnt;"], [0, "&amp;"], [0, "&apos;"], [0, "&lpar;"], [0, "&rpar;"], [0, "&ast;"], [0, "&plus;"], [0, "&comma;"], [1, "&period;"], [0, "&sol;"], [10, "&colon;"], [0, "&semi;"], [0, { v: "&lt;", n: 8402, o: "&nvlt;" }], [0, { v: "&equals;", n: 8421, o: "&bne;" }], [0, { v: "&gt;", n: 8402, o: "&nvgt;" }], [0, "&quest;"], [0, "&commat;"], [26, "&lbrack;"], [0, "&bsol;"], [0, "&rbrack;"], [0, "&Hat;"], [0, "&lowbar;"], [0, "&DiacriticalGrave;"], [5, { n: 106, o: "&fjlig;" }], [20, "&lbrace;"], [0, "&verbar;"], [0, "&rbrace;"], [34, "&nbsp;"], [0, "&iexcl;"], [0, "&cent;"], [0, "&pound;"], [0, "&curren;"], [0, "&yen;"], [0, "&brvbar;"], [0, "&sect;"], [0, "&die;"], [0, "&copy;"], [0, "&ordf;"], [0, "&laquo;"], [0, "&not;"], [0, "&shy;"], [0, "&circledR;"], [0, "&macr;"], [0, "&deg;"], [0, "&PlusMinus;"], [0, "&sup2;"], [0, "&sup3;"], [0, "&acute;"], [0, "&micro;"], [0, "&para;"], [0, "&centerdot;"], [0, "&cedil;"], [0, "&sup1;"], [0, "&ordm;"], [0, "&raquo;"], [0, "&frac14;"], [0, "&frac12;"], [0, "&frac34;"], [0, "&iquest;"], [0, "&Agrave;"], [0, "&Aacute;"], [0, "&Acirc;"], [0, "&Atilde;"], [0, "&Auml;"], [0, "&angst;"], [0, "&AElig;"], [0, "&Ccedil;"], [0, "&Egrave;"], [0, "&Eacute;"], [0, "&Ecirc;"], [0, "&Euml;"], [0, "&Igrave;"], [0, "&Iacute;"], [0, "&Icirc;"], [0, "&Iuml;"], [0, "&ETH;"], [0, "&Ntilde;"], [0, "&Ograve;"], [0, "&Oacute;"], [0, "&Ocirc;"], [0, "&Otilde;"], [0, "&Ouml;"], [0, "&times;"], [0, "&Oslash;"], [0, "&Ugrave;"], [0, "&Uacute;"], [0, "&Ucirc;"], [0, "&Uuml;"], [0, "&Yacute;"], [0, "&THORN;"], [0, "&szlig;"], [0, "&agrave;"], [0, "&aacute;"], [0, "&acirc;"], [0, "&atilde;"], [0, "&auml;"], [0, "&aring;"], [0, "&aelig;"], [0, "&ccedil;"], [0, "&egrave;"], [0, "&eacute;"], [0, "&ecirc;"], [0, "&euml;"], [0, "&igrave;"], [0, "&iacute;"], [0, "&icirc;"], [0, "&iuml;"], [0, "&eth;"], [0, "&ntilde;"], [0, "&ograve;"], [0, "&oacute;"], [0, "&ocirc;"], [0, "&otilde;"], [0, "&ouml;"], [0, "&div;"], [0, "&oslash;"], [0, "&ugrave;"], [0, "&uacute;"], [0, "&ucirc;"], [0, "&uuml;"], [0, "&yacute;"], [0, "&thorn;"], [0, "&yuml;"], [0, "&Amacr;"], [0, "&amacr;"], [0, "&Abreve;"], [0, "&abreve;"], [0, "&Aogon;"], [0, "&aogon;"], [0, "&Cacute;"], [0, "&cacute;"], [0, "&Ccirc;"], [0, "&ccirc;"], [0, "&Cdot;"], [0, "&cdot;"], [0, "&Ccaron;"], [0, "&ccaron;"], [0, "&Dcaron;"], [0, "&dcaron;"], [0, "&Dstrok;"], [0, "&dstrok;"], [0, "&Emacr;"], [0, "&emacr;"], [2, "&Edot;"], [0, "&edot;"], [0, "&Eogon;"], [0, "&eogon;"], [0, "&Ecaron;"], [0, "&ecaron;"], [0, "&Gcirc;"], [0, "&gcirc;"], [0, "&Gbreve;"], [0, "&gbreve;"], [0, "&Gdot;"], [0, "&gdot;"], [0, "&Gcedil;"], [1, "&Hcirc;"], [0, "&hcirc;"], [0, "&Hstrok;"], [0, "&hstrok;"], [0, "&Itilde;"], [0, "&itilde;"], [0, "&Imacr;"], [0, "&imacr;"], [2, "&Iogon;"], [0, "&iogon;"], [0, "&Idot;"], [0, "&imath;"], [0, "&IJlig;"], [0, "&ijlig;"], [0, "&Jcirc;"], [0, "&jcirc;"], [0, "&Kcedil;"], [0, "&kcedil;"], [0, "&kgreen;"], [0, "&Lacute;"], [0, "&lacute;"], [0, "&Lcedil;"], [0, "&lcedil;"], [0, "&Lcaron;"], [0, "&lcaron;"], [0, "&Lmidot;"], [0, "&lmidot;"], [0, "&Lstrok;"], [0, "&lstrok;"], [0, "&Nacute;"], [0, "&nacute;"], [0, "&Ncedil;"], [0, "&ncedil;"], [0, "&Ncaron;"], [0, "&ncaron;"], [0, "&napos;"], [0, "&ENG;"], [0, "&eng;"], [0, "&Omacr;"], [0, "&omacr;"], [2, "&Odblac;"], [0, "&odblac;"], [0, "&OElig;"], [0, "&oelig;"], [0, "&Racute;"], [0, "&racute;"], [0, "&Rcedil;"], [0, "&rcedil;"], [0, "&Rcaron;"], [0, "&rcaron;"], [0, "&Sacute;"], [0, "&sacute;"], [0, "&Scirc;"], [0, "&scirc;"], [0, "&Scedil;"], [0, "&scedil;"], [0, "&Scaron;"], [0, "&scaron;"], [0, "&Tcedil;"], [0, "&tcedil;"], [0, "&Tcaron;"], [0, "&tcaron;"], [0, "&Tstrok;"], [0, "&tstrok;"], [0, "&Utilde;"], [0, "&utilde;"], [0, "&Umacr;"], [0, "&umacr;"], [0, "&Ubreve;"], [0, "&ubreve;"], [0, "&Uring;"], [0, "&uring;"], [0, "&Udblac;"], [0, "&udblac;"], [0, "&Uogon;"], [0, "&uogon;"], [0, "&Wcirc;"], [0, "&wcirc;"], [0, "&Ycirc;"], [0, "&ycirc;"], [0, "&Yuml;"], [0, "&Zacute;"], [0, "&zacute;"], [0, "&Zdot;"], [0, "&zdot;"], [0, "&Zcaron;"], [0, "&zcaron;"], [19, "&fnof;"], [34, "&imped;"], [63, "&gacute;"], [65, "&jmath;"], [142, "&circ;"], [0, "&caron;"], [16, "&breve;"], [0, "&DiacriticalDot;"], [0, "&ring;"], [0, "&ogon;"], [0, "&DiacriticalTilde;"], [0, "&dblac;"], [51, "&DownBreve;"], [127, "&Alpha;"], [0, "&Beta;"], [0, "&Gamma;"], [0, "&Delta;"], [0, "&Epsilon;"], [0, "&Zeta;"], [0, "&Eta;"], [0, "&Theta;"], [0, "&Iota;"], [0, "&Kappa;"], [0, "&Lambda;"], [0, "&Mu;"], [0, "&Nu;"], [0, "&Xi;"], [0, "&Omicron;"], [0, "&Pi;"], [0, "&Rho;"], [1, "&Sigma;"], [0, "&Tau;"], [0, "&Upsilon;"], [0, "&Phi;"], [0, "&Chi;"], [0, "&Psi;"], [0, "&ohm;"], [7, "&alpha;"], [0, "&beta;"], [0, "&gamma;"], [0, "&delta;"], [0, "&epsi;"], [0, "&zeta;"], [0, "&eta;"], [0, "&theta;"], [0, "&iota;"], [0, "&kappa;"], [0, "&lambda;"], [0, "&mu;"], [0, "&nu;"], [0, "&xi;"], [0, "&omicron;"], [0, "&pi;"], [0, "&rho;"], [0, "&sigmaf;"], [0, "&sigma;"], [0, "&tau;"], [0, "&upsi;"], [0, "&phi;"], [0, "&chi;"], [0, "&psi;"], [0, "&omega;"], [7, "&thetasym;"], [0, "&Upsi;"], [2, "&phiv;"], [0, "&piv;"], [5, "&Gammad;"], [0, "&digamma;"], [18, "&kappav;"], [0, "&rhov;"], [3, "&epsiv;"], [0, "&backepsilon;"], [10, "&IOcy;"], [0, "&DJcy;"], [0, "&GJcy;"], [0, "&Jukcy;"], [0, "&DScy;"], [0, "&Iukcy;"], [0, "&YIcy;"], [0, "&Jsercy;"], [0, "&LJcy;"], [0, "&NJcy;"], [0, "&TSHcy;"], [0, "&KJcy;"], [1, "&Ubrcy;"], [0, "&DZcy;"], [0, "&Acy;"], [0, "&Bcy;"], [0, "&Vcy;"], [0, "&Gcy;"], [0, "&Dcy;"], [0, "&IEcy;"], [0, "&ZHcy;"], [0, "&Zcy;"], [0, "&Icy;"], [0, "&Jcy;"], [0, "&Kcy;"], [0, "&Lcy;"], [0, "&Mcy;"], [0, "&Ncy;"], [0, "&Ocy;"], [0, "&Pcy;"], [0, "&Rcy;"], [0, "&Scy;"], [0, "&Tcy;"], [0, "&Ucy;"], [0, "&Fcy;"], [0, "&KHcy;"], [0, "&TScy;"], [0, "&CHcy;"], [0, "&SHcy;"], [0, "&SHCHcy;"], [0, "&HARDcy;"], [0, "&Ycy;"], [0, "&SOFTcy;"], [0, "&Ecy;"], [0, "&YUcy;"], [0, "&YAcy;"], [0, "&acy;"], [0, "&bcy;"], [0, "&vcy;"], [0, "&gcy;"], [0, "&dcy;"], [0, "&iecy;"], [0, "&zhcy;"], [0, "&zcy;"], [0, "&icy;"], [0, "&jcy;"], [0, "&kcy;"], [0, "&lcy;"], [0, "&mcy;"], [0, "&ncy;"], [0, "&ocy;"], [0, "&pcy;"], [0, "&rcy;"], [0, "&scy;"], [0, "&tcy;"], [0, "&ucy;"], [0, "&fcy;"], [0, "&khcy;"], [0, "&tscy;"], [0, "&chcy;"], [0, "&shcy;"], [0, "&shchcy;"], [0, "&hardcy;"], [0, "&ycy;"], [0, "&softcy;"], [0, "&ecy;"], [0, "&yucy;"], [0, "&yacy;"], [1, "&iocy;"], [0, "&djcy;"], [0, "&gjcy;"], [0, "&jukcy;"], [0, "&dscy;"], [0, "&iukcy;"], [0, "&yicy;"], [0, "&jsercy;"], [0, "&ljcy;"], [0, "&njcy;"], [0, "&tshcy;"], [0, "&kjcy;"], [1, "&ubrcy;"], [0, "&dzcy;"], [7074, "&ensp;"], [0, "&emsp;"], [0, "&emsp13;"], [0, "&emsp14;"], [1, "&numsp;"], [0, "&puncsp;"], [0, "&ThinSpace;"], [0, "&hairsp;"], [0, "&NegativeMediumSpace;"], [0, "&zwnj;"], [0, "&zwj;"], [0, "&lrm;"], [0, "&rlm;"], [0, "&dash;"], [2, "&ndash;"], [0, "&mdash;"], [0, "&horbar;"], [0, "&Verbar;"], [1, "&lsquo;"], [0, "&CloseCurlyQuote;"], [0, "&lsquor;"], [1, "&ldquo;"], [0, "&CloseCurlyDoubleQuote;"], [0, "&bdquo;"], [1, "&dagger;"], [0, "&Dagger;"], [0, "&bull;"], [2, "&nldr;"], [0, "&hellip;"], [9, "&permil;"], [0, "&pertenk;"], [0, "&prime;"], [0, "&Prime;"], [0, "&tprime;"], [0, "&backprime;"], [3, "&lsaquo;"], [0, "&rsaquo;"], [3, "&oline;"], [2, "&caret;"], [1, "&hybull;"], [0, "&frasl;"], [10, "&bsemi;"], [7, "&qprime;"], [7, { v: "&MediumSpace;", n: 8202, o: "&ThickSpace;" }], [0, "&NoBreak;"], [0, "&af;"], [0, "&InvisibleTimes;"], [0, "&ic;"], [72, "&euro;"], [46, "&tdot;"], [0, "&DotDot;"], [37, "&complexes;"], [2, "&incare;"], [4, "&gscr;"], [0, "&hamilt;"], [0, "&Hfr;"], [0, "&Hopf;"], [0, "&planckh;"], [0, "&hbar;"], [0, "&imagline;"], [0, "&Ifr;"], [0, "&lagran;"], [0, "&ell;"], [1, "&naturals;"], [0, "&numero;"], [0, "&copysr;"], [0, "&weierp;"], [0, "&Popf;"], [0, "&Qopf;"], [0, "&realine;"], [0, "&real;"], [0, "&reals;"], [0, "&rx;"], [3, "&trade;"], [1, "&integers;"], [2, "&mho;"], [0, "&zeetrf;"], [0, "&iiota;"], [2, "&bernou;"], [0, "&Cayleys;"], [1, "&escr;"], [0, "&Escr;"], [0, "&Fouriertrf;"], [1, "&Mellintrf;"], [0, "&order;"], [0, "&alefsym;"], [0, "&beth;"], [0, "&gimel;"], [0, "&daleth;"], [12, "&CapitalDifferentialD;"], [0, "&dd;"], [0, "&ee;"], [0, "&ii;"], [10, "&frac13;"], [0, "&frac23;"], [0, "&frac15;"], [0, "&frac25;"], [0, "&frac35;"], [0, "&frac45;"], [0, "&frac16;"], [0, "&frac56;"], [0, "&frac18;"], [0, "&frac38;"], [0, "&frac58;"], [0, "&frac78;"], [49, "&larr;"], [0, "&ShortUpArrow;"], [0, "&rarr;"], [0, "&darr;"], [0, "&harr;"], [0, "&updownarrow;"], [0, "&nwarr;"], [0, "&nearr;"], [0, "&LowerRightArrow;"], [0, "&LowerLeftArrow;"], [0, "&nlarr;"], [0, "&nrarr;"], [1, { v: "&rarrw;", n: 824, o: "&nrarrw;" }], [0, "&Larr;"], [0, "&Uarr;"], [0, "&Rarr;"], [0, "&Darr;"], [0, "&larrtl;"], [0, "&rarrtl;"], [0, "&LeftTeeArrow;"], [0, "&mapstoup;"], [0, "&map;"], [0, "&DownTeeArrow;"], [1, "&hookleftarrow;"], [0, "&hookrightarrow;"], [0, "&larrlp;"], [0, "&looparrowright;"], [0, "&harrw;"], [0, "&nharr;"], [1, "&lsh;"], [0, "&rsh;"], [0, "&ldsh;"], [0, "&rdsh;"], [1, "&crarr;"], [0, "&cularr;"], [0, "&curarr;"], [2, "&circlearrowleft;"], [0, "&circlearrowright;"], [0, "&leftharpoonup;"], [0, "&DownLeftVector;"], [0, "&RightUpVector;"], [0, "&LeftUpVector;"], [0, "&rharu;"], [0, "&DownRightVector;"], [0, "&dharr;"], [0, "&dharl;"], [0, "&RightArrowLeftArrow;"], [0, "&udarr;"], [0, "&LeftArrowRightArrow;"], [0, "&leftleftarrows;"], [0, "&upuparrows;"], [0, "&rightrightarrows;"], [0, "&ddarr;"], [0, "&leftrightharpoons;"], [0, "&Equilibrium;"], [0, "&nlArr;"], [0, "&nhArr;"], [0, "&nrArr;"], [0, "&DoubleLeftArrow;"], [0, "&DoubleUpArrow;"], [0, "&DoubleRightArrow;"], [0, "&dArr;"], [0, "&DoubleLeftRightArrow;"], [0, "&DoubleUpDownArrow;"], [0, "&nwArr;"], [0, "&neArr;"], [0, "&seArr;"], [0, "&swArr;"], [0, "&lAarr;"], [0, "&rAarr;"], [1, "&zigrarr;"], [6, "&larrb;"], [0, "&rarrb;"], [15, "&DownArrowUpArrow;"], [7, "&loarr;"], [0, "&roarr;"], [0, "&hoarr;"], [0, "&forall;"], [0, "&comp;"], [0, { v: "&part;", n: 824, o: "&npart;" }], [0, "&exist;"], [0, "&nexist;"], [0, "&empty;"], [1, "&Del;"], [0, "&Element;"], [0, "&NotElement;"], [1, "&ni;"], [0, "&notni;"], [2, "&prod;"], [0, "&coprod;"], [0, "&sum;"], [0, "&minus;"], [0, "&MinusPlus;"], [0, "&dotplus;"], [1, "&Backslash;"], [0, "&lowast;"], [0, "&compfn;"], [1, "&radic;"], [2, "&prop;"], [0, "&infin;"], [0, "&angrt;"], [0, { v: "&ang;", n: 8402, o: "&nang;" }], [0, "&angmsd;"], [0, "&angsph;"], [0, "&mid;"], [0, "&nmid;"], [0, "&DoubleVerticalBar;"], [0, "&NotDoubleVerticalBar;"], [0, "&and;"], [0, "&or;"], [0, { v: "&cap;", n: 65024, o: "&caps;" }], [0, { v: "&cup;", n: 65024, o: "&cups;" }], [0, "&int;"], [0, "&Int;"], [0, "&iiint;"], [0, "&conint;"], [0, "&Conint;"], [0, "&Cconint;"], [0, "&cwint;"], [0, "&ClockwiseContourIntegral;"], [0, "&awconint;"], [0, "&there4;"], [0, "&becaus;"], [0, "&ratio;"], [0, "&Colon;"], [0, "&dotminus;"], [1, "&mDDot;"], [0, "&homtht;"], [0, { v: "&sim;", n: 8402, o: "&nvsim;" }], [0, { v: "&backsim;", n: 817, o: "&race;" }], [0, { v: "&ac;", n: 819, o: "&acE;" }], [0, "&acd;"], [0, "&VerticalTilde;"], [0, "&NotTilde;"], [0, { v: "&eqsim;", n: 824, o: "&nesim;" }], [0, "&sime;"], [0, "&NotTildeEqual;"], [0, "&cong;"], [0, "&simne;"], [0, "&ncong;"], [0, "&ap;"], [0, "&nap;"], [0, "&ape;"], [0, { v: "&apid;", n: 824, o: "&napid;" }], [0, "&backcong;"], [0, { v: "&asympeq;", n: 8402, o: "&nvap;" }], [0, { v: "&bump;", n: 824, o: "&nbump;" }], [0, { v: "&bumpe;", n: 824, o: "&nbumpe;" }], [0, { v: "&doteq;", n: 824, o: "&nedot;" }], [0, "&doteqdot;"], [0, "&efDot;"], [0, "&erDot;"], [0, "&Assign;"], [0, "&ecolon;"], [0, "&ecir;"], [0, "&circeq;"], [1, "&wedgeq;"], [0, "&veeeq;"], [1, "&triangleq;"], [2, "&equest;"], [0, "&ne;"], [0, { v: "&Congruent;", n: 8421, o: "&bnequiv;" }], [0, "&nequiv;"], [1, { v: "&le;", n: 8402, o: "&nvle;" }], [0, { v: "&ge;", n: 8402, o: "&nvge;" }], [0, { v: "&lE;", n: 824, o: "&nlE;" }], [0, { v: "&gE;", n: 824, o: "&ngE;" }], [0, { v: "&lnE;", n: 65024, o: "&lvertneqq;" }], [0, { v: "&gnE;", n: 65024, o: "&gvertneqq;" }], [0, { v: "&ll;", n: new Map(tt([[824, "&nLtv;"], [7577, "&nLt;"]])) }], [0, { v: "&gg;", n: new Map(tt([[824, "&nGtv;"], [7577, "&nGt;"]])) }], [0, "&between;"], [0, "&NotCupCap;"], [0, "&nless;"], [0, "&ngt;"], [0, "&nle;"], [0, "&nge;"], [0, "&lesssim;"], [0, "&GreaterTilde;"], [0, "&nlsim;"], [0, "&ngsim;"], [0, "&LessGreater;"], [0, "&gl;"], [0, "&NotLessGreater;"], [0, "&NotGreaterLess;"], [0, "&pr;"], [0, "&sc;"], [0, "&prcue;"], [0, "&sccue;"], [0, "&PrecedesTilde;"], [0, { v: "&scsim;", n: 824, o: "&NotSucceedsTilde;" }], [0, "&NotPrecedes;"], [0, "&NotSucceeds;"], [0, { v: "&sub;", n: 8402, o: "&NotSubset;" }], [0, { v: "&sup;", n: 8402, o: "&NotSuperset;" }], [0, "&nsub;"], [0, "&nsup;"], [0, "&sube;"], [0, "&supe;"], [0, "&NotSubsetEqual;"], [0, "&NotSupersetEqual;"], [0, { v: "&subne;", n: 65024, o: "&varsubsetneq;" }], [0, { v: "&supne;", n: 65024, o: "&varsupsetneq;" }], [1, "&cupdot;"], [0, "&UnionPlus;"], [0, { v: "&sqsub;", n: 824, o: "&NotSquareSubset;" }], [0, { v: "&sqsup;", n: 824, o: "&NotSquareSuperset;" }], [0, "&sqsube;"], [0, "&sqsupe;"], [0, { v: "&sqcap;", n: 65024, o: "&sqcaps;" }], [0, { v: "&sqcup;", n: 65024, o: "&sqcups;" }], [0, "&CirclePlus;"], [0, "&CircleMinus;"], [0, "&CircleTimes;"], [0, "&osol;"], [0, "&CircleDot;"], [0, "&circledcirc;"], [0, "&circledast;"], [1, "&circleddash;"], [0, "&boxplus;"], [0, "&boxminus;"], [0, "&boxtimes;"], [0, "&dotsquare;"], [0, "&RightTee;"], [0, "&dashv;"], [0, "&DownTee;"], [0, "&bot;"], [1, "&models;"], [0, "&DoubleRightTee;"], [0, "&Vdash;"], [0, "&Vvdash;"], [0, "&VDash;"], [0, "&nvdash;"], [0, "&nvDash;"], [0, "&nVdash;"], [0, "&nVDash;"], [0, "&prurel;"], [1, "&LeftTriangle;"], [0, "&RightTriangle;"], [0, { v: "&LeftTriangleEqual;", n: 8402, o: "&nvltrie;" }], [0, { v: "&RightTriangleEqual;", n: 8402, o: "&nvrtrie;" }], [0, "&origof;"], [0, "&imof;"], [0, "&multimap;"], [0, "&hercon;"], [0, "&intcal;"], [0, "&veebar;"], [1, "&barvee;"], [0, "&angrtvb;"], [0, "&lrtri;"], [0, "&bigwedge;"], [0, "&bigvee;"], [0, "&bigcap;"], [0, "&bigcup;"], [0, "&diam;"], [0, "&sdot;"], [0, "&sstarf;"], [0, "&divideontimes;"], [0, "&bowtie;"], [0, "&ltimes;"], [0, "&rtimes;"], [0, "&leftthreetimes;"], [0, "&rightthreetimes;"], [0, "&backsimeq;"], [0, "&curlyvee;"], [0, "&curlywedge;"], [0, "&Sub;"], [0, "&Sup;"], [0, "&Cap;"], [0, "&Cup;"], [0, "&fork;"], [0, "&epar;"], [0, "&lessdot;"], [0, "&gtdot;"], [0, { v: "&Ll;", n: 824, o: "&nLl;" }], [0, { v: "&Gg;", n: 824, o: "&nGg;" }], [0, { v: "&leg;", n: 65024, o: "&lesg;" }], [0, { v: "&gel;", n: 65024, o: "&gesl;" }], [2, "&cuepr;"], [0, "&cuesc;"], [0, "&NotPrecedesSlantEqual;"], [0, "&NotSucceedsSlantEqual;"], [0, "&NotSquareSubsetEqual;"], [0, "&NotSquareSupersetEqual;"], [2, "&lnsim;"], [0, "&gnsim;"], [0, "&precnsim;"], [0, "&scnsim;"], [0, "&nltri;"], [0, "&NotRightTriangle;"], [0, "&nltrie;"], [0, "&NotRightTriangleEqual;"], [0, "&vellip;"], [0, "&ctdot;"], [0, "&utdot;"], [0, "&dtdot;"], [0, "&disin;"], [0, "&isinsv;"], [0, "&isins;"], [0, { v: "&isindot;", n: 824, o: "&notindot;" }], [0, "&notinvc;"], [0, "&notinvb;"], [1, { v: "&isinE;", n: 824, o: "&notinE;" }], [0, "&nisd;"], [0, "&xnis;"], [0, "&nis;"], [0, "&notnivc;"], [0, "&notnivb;"], [6, "&barwed;"], [0, "&Barwed;"], [1, "&lceil;"], [0, "&rceil;"], [0, "&LeftFloor;"], [0, "&rfloor;"], [0, "&drcrop;"], [0, "&dlcrop;"], [0, "&urcrop;"], [0, "&ulcrop;"], [0, "&bnot;"], [1, "&profline;"], [0, "&profsurf;"], [1, "&telrec;"], [0, "&target;"], [5, "&ulcorn;"], [0, "&urcorn;"], [0, "&dlcorn;"], [0, "&drcorn;"], [2, "&frown;"], [0, "&smile;"], [9, "&cylcty;"], [0, "&profalar;"], [7, "&topbot;"], [6, "&ovbar;"], [1, "&solbar;"], [60, "&angzarr;"], [51, "&lmoustache;"], [0, "&rmoustache;"], [2, "&OverBracket;"], [0, "&bbrk;"], [0, "&bbrktbrk;"], [37, "&OverParenthesis;"], [0, "&UnderParenthesis;"], [0, "&OverBrace;"], [0, "&UnderBrace;"], [2, "&trpezium;"], [4, "&elinters;"], [59, "&blank;"], [164, "&circledS;"], [55, "&boxh;"], [1, "&boxv;"], [9, "&boxdr;"], [3, "&boxdl;"], [3, "&boxur;"], [3, "&boxul;"], [3, "&boxvr;"], [7, "&boxvl;"], [7, "&boxhd;"], [7, "&boxhu;"], [7, "&boxvh;"], [19, "&boxH;"], [0, "&boxV;"], [0, "&boxdR;"], [0, "&boxDr;"], [0, "&boxDR;"], [0, "&boxdL;"], [0, "&boxDl;"], [0, "&boxDL;"], [0, "&boxuR;"], [0, "&boxUr;"], [0, "&boxUR;"], [0, "&boxuL;"], [0, "&boxUl;"], [0, "&boxUL;"], [0, "&boxvR;"], [0, "&boxVr;"], [0, "&boxVR;"], [0, "&boxvL;"], [0, "&boxVl;"], [0, "&boxVL;"], [0, "&boxHd;"], [0, "&boxhD;"], [0, "&boxHD;"], [0, "&boxHu;"], [0, "&boxhU;"], [0, "&boxHU;"], [0, "&boxvH;"], [0, "&boxVh;"], [0, "&boxVH;"], [19, "&uhblk;"], [3, "&lhblk;"], [3, "&block;"], [8, "&blk14;"], [0, "&blk12;"], [0, "&blk34;"], [13, "&square;"], [8, "&blacksquare;"], [0, "&EmptyVerySmallSquare;"], [1, "&rect;"], [0, "&marker;"], [2, "&fltns;"], [1, "&bigtriangleup;"], [0, "&blacktriangle;"], [0, "&triangle;"], [2, "&blacktriangleright;"], [0, "&rtri;"], [3, "&bigtriangledown;"], [0, "&blacktriangledown;"], [0, "&dtri;"], [2, "&blacktriangleleft;"], [0, "&ltri;"], [6, "&loz;"], [0, "&cir;"], [32, "&tridot;"], [2, "&bigcirc;"], [8, "&ultri;"], [0, "&urtri;"], [0, "&lltri;"], [0, "&EmptySmallSquare;"], [0, "&FilledSmallSquare;"], [8, "&bigstar;"], [0, "&star;"], [7, "&phone;"], [49, "&female;"], [1, "&male;"], [29, "&spades;"], [2, "&clubs;"], [1, "&hearts;"], [0, "&diamondsuit;"], [3, "&sung;"], [2, "&flat;"], [0, "&natural;"], [0, "&sharp;"], [163, "&check;"], [3, "&cross;"], [8, "&malt;"], [21, "&sext;"], [33, "&VerticalSeparator;"], [25, "&lbbrk;"], [0, "&rbbrk;"], [84, "&bsolhsub;"], [0, "&suphsol;"], [28, "&LeftDoubleBracket;"], [0, "&RightDoubleBracket;"], [0, "&lang;"], [0, "&rang;"], [0, "&Lang;"], [0, "&Rang;"], [0, "&loang;"], [0, "&roang;"], [7, "&longleftarrow;"], [0, "&longrightarrow;"], [0, "&longleftrightarrow;"], [0, "&DoubleLongLeftArrow;"], [0, "&DoubleLongRightArrow;"], [0, "&DoubleLongLeftRightArrow;"], [1, "&longmapsto;"], [2, "&dzigrarr;"], [258, "&nvlArr;"], [0, "&nvrArr;"], [0, "&nvHarr;"], [0, "&Map;"], [6, "&lbarr;"], [0, "&bkarow;"], [0, "&lBarr;"], [0, "&dbkarow;"], [0, "&drbkarow;"], [0, "&DDotrahd;"], [0, "&UpArrowBar;"], [0, "&DownArrowBar;"], [2, "&Rarrtl;"], [2, "&latail;"], [0, "&ratail;"], [0, "&lAtail;"], [0, "&rAtail;"], [0, "&larrfs;"], [0, "&rarrfs;"], [0, "&larrbfs;"], [0, "&rarrbfs;"], [2, "&nwarhk;"], [0, "&nearhk;"], [0, "&hksearow;"], [0, "&hkswarow;"], [0, "&nwnear;"], [0, "&nesear;"], [0, "&seswar;"], [0, "&swnwar;"], [8, { v: "&rarrc;", n: 824, o: "&nrarrc;" }], [1, "&cudarrr;"], [0, "&ldca;"], [0, "&rdca;"], [0, "&cudarrl;"], [0, "&larrpl;"], [2, "&curarrm;"], [0, "&cularrp;"], [7, "&rarrpl;"], [2, "&harrcir;"], [0, "&Uarrocir;"], [0, "&lurdshar;"], [0, "&ldrushar;"], [2, "&LeftRightVector;"], [0, "&RightUpDownVector;"], [0, "&DownLeftRightVector;"], [0, "&LeftUpDownVector;"], [0, "&LeftVectorBar;"], [0, "&RightVectorBar;"], [0, "&RightUpVectorBar;"], [0, "&RightDownVectorBar;"], [0, "&DownLeftVectorBar;"], [0, "&DownRightVectorBar;"], [0, "&LeftUpVectorBar;"], [0, "&LeftDownVectorBar;"], [0, "&LeftTeeVector;"], [0, "&RightTeeVector;"], [0, "&RightUpTeeVector;"], [0, "&RightDownTeeVector;"], [0, "&DownLeftTeeVector;"], [0, "&DownRightTeeVector;"], [0, "&LeftUpTeeVector;"], [0, "&LeftDownTeeVector;"], [0, "&lHar;"], [0, "&uHar;"], [0, "&rHar;"], [0, "&dHar;"], [0, "&luruhar;"], [0, "&ldrdhar;"], [0, "&ruluhar;"], [0, "&rdldhar;"], [0, "&lharul;"], [0, "&llhard;"], [0, "&rharul;"], [0, "&lrhard;"], [0, "&udhar;"], [0, "&duhar;"], [0, "&RoundImplies;"], [0, "&erarr;"], [0, "&simrarr;"], [0, "&larrsim;"], [0, "&rarrsim;"], [0, "&rarrap;"], [0, "&ltlarr;"], [1, "&gtrarr;"], [0, "&subrarr;"], [1, "&suplarr;"], [0, "&lfisht;"], [0, "&rfisht;"], [0, "&ufisht;"], [0, "&dfisht;"], [5, "&lopar;"], [0, "&ropar;"], [4, "&lbrke;"], [0, "&rbrke;"], [0, "&lbrkslu;"], [0, "&rbrksld;"], [0, "&lbrksld;"], [0, "&rbrkslu;"], [0, "&langd;"], [0, "&rangd;"], [0, "&lparlt;"], [0, "&rpargt;"], [0, "&gtlPar;"], [0, "&ltrPar;"], [3, "&vzigzag;"], [1, "&vangrt;"], [0, "&angrtvbd;"], [6, "&ange;"], [0, "&range;"], [0, "&dwangle;"], [0, "&uwangle;"], [0, "&angmsdaa;"], [0, "&angmsdab;"], [0, "&angmsdac;"], [0, "&angmsdad;"], [0, "&angmsdae;"], [0, "&angmsdaf;"], [0, "&angmsdag;"], [0, "&angmsdah;"], [0, "&bemptyv;"], [0, "&demptyv;"], [0, "&cemptyv;"], [0, "&raemptyv;"], [0, "&laemptyv;"], [0, "&ohbar;"], [0, "&omid;"], [0, "&opar;"], [1, "&operp;"], [1, "&olcross;"], [0, "&odsold;"], [1, "&olcir;"], [0, "&ofcir;"], [0, "&olt;"], [0, "&ogt;"], [0, "&cirscir;"], [0, "&cirE;"], [0, "&solb;"], [0, "&bsolb;"], [3, "&boxbox;"], [3, "&trisb;"], [0, "&rtriltri;"], [0, { v: "&LeftTriangleBar;", n: 824, o: "&NotLeftTriangleBar;" }], [0, { v: "&RightTriangleBar;", n: 824, o: "&NotRightTriangleBar;" }], [11, "&iinfin;"], [0, "&infintie;"], [0, "&nvinfin;"], [4, "&eparsl;"], [0, "&smeparsl;"], [0, "&eqvparsl;"], [5, "&blacklozenge;"], [8, "&RuleDelayed;"], [1, "&dsol;"], [9, "&bigodot;"], [0, "&bigoplus;"], [0, "&bigotimes;"], [1, "&biguplus;"], [1, "&bigsqcup;"], [5, "&iiiint;"], [0, "&fpartint;"], [2, "&cirfnint;"], [0, "&awint;"], [0, "&rppolint;"], [0, "&scpolint;"], [0, "&npolint;"], [0, "&pointint;"], [0, "&quatint;"], [0, "&intlarhk;"], [10, "&pluscir;"], [0, "&plusacir;"], [0, "&simplus;"], [0, "&plusdu;"], [0, "&plussim;"], [0, "&plustwo;"], [1, "&mcomma;"], [0, "&minusdu;"], [2, "&loplus;"], [0, "&roplus;"], [0, "&Cross;"], [0, "&timesd;"], [0, "&timesbar;"], [1, "&smashp;"], [0, "&lotimes;"], [0, "&rotimes;"], [0, "&otimesas;"], [0, "&Otimes;"], [0, "&odiv;"], [0, "&triplus;"], [0, "&triminus;"], [0, "&tritime;"], [0, "&intprod;"], [2, "&amalg;"], [0, "&capdot;"], [1, "&ncup;"], [0, "&ncap;"], [0, "&capand;"], [0, "&cupor;"], [0, "&cupcap;"], [0, "&capcup;"], [0, "&cupbrcap;"], [0, "&capbrcup;"], [0, "&cupcup;"], [0, "&capcap;"], [0, "&ccups;"], [0, "&ccaps;"], [2, "&ccupssm;"], [2, "&And;"], [0, "&Or;"], [0, "&andand;"], [0, "&oror;"], [0, "&orslope;"], [0, "&andslope;"], [1, "&andv;"], [0, "&orv;"], [0, "&andd;"], [0, "&ord;"], [1, "&wedbar;"], [6, "&sdote;"], [3, "&simdot;"], [2, { v: "&congdot;", n: 824, o: "&ncongdot;" }], [0, "&easter;"], [0, "&apacir;"], [0, { v: "&apE;", n: 824, o: "&napE;" }], [0, "&eplus;"], [0, "&pluse;"], [0, "&Esim;"], [0, "&Colone;"], [0, "&Equal;"], [1, "&ddotseq;"], [0, "&equivDD;"], [0, "&ltcir;"], [0, "&gtcir;"], [0, "&ltquest;"], [0, "&gtquest;"], [0, { v: "&leqslant;", n: 824, o: "&nleqslant;" }], [0, { v: "&geqslant;", n: 824, o: "&ngeqslant;" }], [0, "&lesdot;"], [0, "&gesdot;"], [0, "&lesdoto;"], [0, "&gesdoto;"], [0, "&lesdotor;"], [0, "&gesdotol;"], [0, "&lap;"], [0, "&gap;"], [0, "&lne;"], [0, "&gne;"], [0, "&lnap;"], [0, "&gnap;"], [0, "&lEg;"], [0, "&gEl;"], [0, "&lsime;"], [0, "&gsime;"], [0, "&lsimg;"], [0, "&gsiml;"], [0, "&lgE;"], [0, "&glE;"], [0, "&lesges;"], [0, "&gesles;"], [0, "&els;"], [0, "&egs;"], [0, "&elsdot;"], [0, "&egsdot;"], [0, "&el;"], [0, "&eg;"], [2, "&siml;"], [0, "&simg;"], [0, "&simlE;"], [0, "&simgE;"], [0, { v: "&LessLess;", n: 824, o: "&NotNestedLessLess;" }], [0, { v: "&GreaterGreater;", n: 824, o: "&NotNestedGreaterGreater;" }], [1, "&glj;"], [0, "&gla;"], [0, "&ltcc;"], [0, "&gtcc;"], [0, "&lescc;"], [0, "&gescc;"], [0, "&smt;"], [0, "&lat;"], [0, { v: "&smte;", n: 65024, o: "&smtes;" }], [0, { v: "&late;", n: 65024, o: "&lates;" }], [0, "&bumpE;"], [0, { v: "&PrecedesEqual;", n: 824, o: "&NotPrecedesEqual;" }], [0, { v: "&sce;", n: 824, o: "&NotSucceedsEqual;" }], [2, "&prE;"], [0, "&scE;"], [0, "&precneqq;"], [0, "&scnE;"], [0, "&prap;"], [0, "&scap;"], [0, "&precnapprox;"], [0, "&scnap;"], [0, "&Pr;"], [0, "&Sc;"], [0, "&subdot;"], [0, "&supdot;"], [0, "&subplus;"], [0, "&supplus;"], [0, "&submult;"], [0, "&supmult;"], [0, "&subedot;"], [0, "&supedot;"], [0, { v: "&subE;", n: 824, o: "&nsubE;" }], [0, { v: "&supE;", n: 824, o: "&nsupE;" }], [0, "&subsim;"], [0, "&supsim;"], [2, { v: "&subnE;", n: 65024, o: "&varsubsetneqq;" }], [0, { v: "&supnE;", n: 65024, o: "&varsupsetneqq;" }], [2, "&csub;"], [0, "&csup;"], [0, "&csube;"], [0, "&csupe;"], [0, "&subsup;"], [0, "&supsub;"], [0, "&subsub;"], [0, "&supsup;"], [0, "&suphsub;"], [0, "&supdsub;"], [0, "&forkv;"], [0, "&topfork;"], [0, "&mlcp;"], [8, "&Dashv;"], [1, "&Vdashl;"], [0, "&Barv;"], [0, "&vBar;"], [0, "&vBarv;"], [1, "&Vbar;"], [0, "&Not;"], [0, "&bNot;"], [0, "&rnmid;"], [0, "&cirmid;"], [0, "&midcir;"], [0, "&topcir;"], [0, "&nhpar;"], [0, "&parsim;"], [9, { v: "&parsl;", n: 8421, o: "&nparsl;" }], [44343, { n: new Map(tt([[56476, "&Ascr;"], [1, "&Cscr;"], [0, "&Dscr;"], [2, "&Gscr;"], [2, "&Jscr;"], [0, "&Kscr;"], [2, "&Nscr;"], [0, "&Oscr;"], [0, "&Pscr;"], [0, "&Qscr;"], [1, "&Sscr;"], [0, "&Tscr;"], [0, "&Uscr;"], [0, "&Vscr;"], [0, "&Wscr;"], [0, "&Xscr;"], [0, "&Yscr;"], [0, "&Zscr;"], [0, "&ascr;"], [0, "&bscr;"], [0, "&cscr;"], [0, "&dscr;"], [1, "&fscr;"], [1, "&hscr;"], [0, "&iscr;"], [0, "&jscr;"], [0, "&kscr;"], [0, "&lscr;"], [0, "&mscr;"], [0, "&nscr;"], [1, "&pscr;"], [0, "&qscr;"], [0, "&rscr;"], [0, "&sscr;"], [0, "&tscr;"], [0, "&uscr;"], [0, "&vscr;"], [0, "&wscr;"], [0, "&xscr;"], [0, "&yscr;"], [0, "&zscr;"], [52, "&Afr;"], [0, "&Bfr;"], [1, "&Dfr;"], [0, "&Efr;"], [0, "&Ffr;"], [0, "&Gfr;"], [2, "&Jfr;"], [0, "&Kfr;"], [0, "&Lfr;"], [0, "&Mfr;"], [0, "&Nfr;"], [0, "&Ofr;"], [0, "&Pfr;"], [0, "&Qfr;"], [1, "&Sfr;"], [0, "&Tfr;"], [0, "&Ufr;"], [0, "&Vfr;"], [0, "&Wfr;"], [0, "&Xfr;"], [0, "&Yfr;"], [1, "&afr;"], [0, "&bfr;"], [0, "&cfr;"], [0, "&dfr;"], [0, "&efr;"], [0, "&ffr;"], [0, "&gfr;"], [0, "&hfr;"], [0, "&ifr;"], [0, "&jfr;"], [0, "&kfr;"], [0, "&lfr;"], [0, "&mfr;"], [0, "&nfr;"], [0, "&ofr;"], [0, "&pfr;"], [0, "&qfr;"], [0, "&rfr;"], [0, "&sfr;"], [0, "&tfr;"], [0, "&ufr;"], [0, "&vfr;"], [0, "&wfr;"], [0, "&xfr;"], [0, "&yfr;"], [0, "&zfr;"], [0, "&Aopf;"], [0, "&Bopf;"], [1, "&Dopf;"], [0, "&Eopf;"], [0, "&Fopf;"], [0, "&Gopf;"], [1, "&Iopf;"], [0, "&Jopf;"], [0, "&Kopf;"], [0, "&Lopf;"], [0, "&Mopf;"], [1, "&Oopf;"], [3, "&Sopf;"], [0, "&Topf;"], [0, "&Uopf;"], [0, "&Vopf;"], [0, "&Wopf;"], [0, "&Xopf;"], [0, "&Yopf;"], [1, "&aopf;"], [0, "&bopf;"], [0, "&copf;"], [0, "&dopf;"], [0, "&eopf;"], [0, "&fopf;"], [0, "&gopf;"], [0, "&hopf;"], [0, "&iopf;"], [0, "&jopf;"], [0, "&kopf;"], [0, "&lopf;"], [0, "&mopf;"], [0, "&nopf;"], [0, "&oopf;"], [0, "&popf;"], [0, "&qopf;"], [0, "&ropf;"], [0, "&sopf;"], [0, "&topf;"], [0, "&uopf;"], [0, "&vopf;"], [0, "&wopf;"], [0, "&xopf;"], [0, "&yopf;"], [0, "&zopf;"]])) }], [8906, "&fflig;"], [0, "&filig;"], [0, "&fllig;"], [0, "&ffilig;"], [0, "&ffllig;"]]));
var Rt = /["&'<>$\x80-\uFFFF]/g, Bu = new Map([[34, "&quot;"], [38, "&amp;"], [39, "&apos;"], [60, "&lt;"], [62, "&gt;"]]), Hu = String.prototype.codePointAt != null ? function (t, e) { return t.codePointAt(e); } : function (t, e) { return (t.charCodeAt(e) & 64512) === 55296 ? (t.charCodeAt(e) - 55296) * 1024 + t.charCodeAt(e + 1) - 56320 + 65536 : t.charCodeAt(e); };
function je(t) { var e = "", u = 0, r; for (; (r = Rt.exec(t)) !== null;) {
    var i = r.index, s = t.charCodeAt(i), d = Bu.get(s);
    d !== void 0 ? (e += t.substring(u, i) + d, u = i + 1) : (e += "".concat(t.substring(u, i), "&#x").concat(Hu(t, i).toString(16), ";"), u = Rt.lastIndex += +((s & 64512) === 55296));
} return e + t.substr(u); }
function jt(t, e) { return function (r) { var i, s = 0, d = ""; for (; i = t.exec(r);)
    s !== i.index && (d += r.substring(s, i.index)), d += e.get(i[0].charCodeAt(0)), s = i.index + 1; return d + r.substring(s); }; }
var _u = jt(/[&<>'"]/g, Bu), ut = jt(/["&\u00A0]/g, new Map([[34, "&quot;"], [38, "&amp;"], [160, "&nbsp;"]])), rt = jt(/[&<>\u00A0]/g, new Map([[38, "&amp;"], [60, "&lt;"], [62, "&gt;"], [160, "&nbsp;"]]));
var Fu;
(function (t) { t[t.XML = 0] = "XML", t[t.HTML = 1] = "HTML"; })(Fu || (Fu = {}));
var Vu;
(function (t) { t[t.UTF8 = 0] = "UTF8", t[t.ASCII = 1] = "ASCII", t[t.Extensive = 2] = "Extensive", t[t.Attribute = 3] = "Attribute", t[t.Text = 4] = "Text"; })(Vu || (Vu = {}));
var ju = new Map(["altGlyph", "altGlyphDef", "altGlyphItem", "animateColor", "animateMotion", "animateTransform", "clipPath", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "foreignObject", "glyphRef", "linearGradient", "radialGradient", "textPath"].map(function (t) { return [t.toLowerCase(), t]; })), Gu = new Map(["definitionURL", "attributeName", "attributeType", "baseFrequency", "baseProfile", "calcMode", "clipPathUnits", "diffuseConstant", "edgeMode", "filterUnits", "glyphRef", "gradientTransform", "gradientUnits", "kernelMatrix", "kernelUnitLength", "keyPoints", "keySplines", "keyTimes", "lengthAdjust", "limitingConeAngle", "markerHeight", "markerUnits", "markerWidth", "maskContentUnits", "maskUnits", "numOctaves", "pathLength", "patternContentUnits", "patternTransform", "patternUnits", "pointsAtX", "pointsAtY", "pointsAtZ", "preserveAlpha", "preserveAspectRatio", "primitiveUnits", "refX", "refY", "repeatCount", "repeatDur", "requiredExtensions", "requiredFeatures", "specularConstant", "specularExponent", "spreadMethod", "startOffset", "stdDeviation", "stitchTiles", "surfaceScale", "systemLanguage", "tableValues", "targetX", "targetY", "textLength", "viewBox", "viewTarget", "xChannelSelector", "yChannelSelector", "zoomAndPan"].map(function (t) { return [t.toLowerCase(), t]; }));
var ra = new Set(["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"]);
function aa(t) { return t.replace(/"/g, "&quot;"); }
function ia(t, e) { var u; if (!t)
    return; var r = ((u = e.encodeEntities) !== null && u !== void 0 ? u : e.decodeEntities) === !1 ? aa : e.xmlMode || e.encodeEntities !== "utf8" ? je : ut; return Object.keys(t).map(function (i) { var s, d; var b = (s = t[i]) !== null && s !== void 0 ? s : ""; return e.xmlMode === "foreign" && (i = (d = Gu.get(i)) !== null && d !== void 0 ? d : i), !e.emptyAttrs && !e.xmlMode && b === "" ? i : "".concat(i, "=\"").concat(r(b), "\""); }).join(" "); }
var $u = new Set(["area", "base", "basefont", "br", "col", "command", "embed", "frame", "hr", "img", "input", "isindex", "keygen", "link", "meta", "param", "source", "track", "wbr"]);
function Wt(t, e) {
    if (e === void 0) { e = {}; }
    var u = "length" in t ? t : [t], r = "";
    for (var i = 0; i < u.length; i++)
        r += na(u[i], e);
    return r;
}
var Ie = Wt;
function na(t, e) { switch (t.type) {
    case Lt: return Wt(t.children, e);
    case Ft:
    case Ut: return fa(t);
    case Pt: return ha(t);
    case _t: return da(t);
    case Mt:
    case Bt:
    case Ht: return oa(t, e);
    case Ot: return la(t, e);
} }
var sa = new Set(["mi", "mo", "mn", "ms", "mtext", "annotation-xml", "foreignObject", "desc", "title"]), ca = new Set(["svg", "math"]);
function oa(t, e) { var u; e.xmlMode === "foreign" && (t.name = (u = ju.get(t.name)) !== null && u !== void 0 ? u : t.name, t.parent && sa.has(t.parent.name) && (e = pe(ue({}, e), { xmlMode: !1 }))), !e.xmlMode && ca.has(t.name) && (e = pe(ue({}, e), { xmlMode: "foreign" })); var r = "<".concat(t.name), i = ia(t.attribs, e); return i && (r += " ".concat(i)), t.children.length === 0 && (e.xmlMode ? e.selfClosingTags !== !1 : e.selfClosingTags && $u.has(t.name)) ? (e.xmlMode || (r += " "), r += "/>") : (r += ">", t.children.length > 0 && (r += Wt(t.children, e)), (e.xmlMode || !$u.has(t.name)) && (r += "</".concat(t.name, ">"))), r; }
function fa(t) { return "<".concat(t.data, ">"); }
function la(t, e) { var u; var r = t.data || ""; return ((u = e.encodeEntities) !== null && u !== void 0 ? u : e.decodeEntities) !== !1 && !(!e.xmlMode && t.parent && ra.has(t.parent.name)) && (r = e.xmlMode || e.encodeEntities !== "utf8" ? je(r) : rt(r)), r; }
function da(t) { return "<![CDATA[".concat(t.children[0].data, "]]>"); }
function ha(t) { return "<!--".concat(t.data, "-->"); }
function Wu(t, e) { return Ie(t, e); }
function ba(t, e) { return W(t) ? t.children.map(function (u) { return Wu(u, e); }).join("") : ""; }
function at(t) {
    return Array.isArray(t) ? t.map(at).join("") : P(t) ? t.name === "br" ? "\n" : at(t.children) : qe(t) ? at(t.children) : re(t) ? t.data : "";
}
function le(t) { return Array.isArray(t) ? t.map(le).join("") : W(t) && !Re(t) ? le(t.children) : re(t) ? t.data : ""; }
function Xt(t) { return Array.isArray(t) ? t.map(Xt).join("") : W(t) && (t.type === O.Tag || qe(t)) ? Xt(t.children) : re(t) ? t.data : ""; }
function it(t) { return W(t) ? t.children : []; }
function Xu(t) { return t.parent || null; }
function nt(t) {
    var _b, _c;
    var e = Xu(t);
    if (e != null)
        return it(e);
    var u = [t], r = t.prev, i = t.next;
    for (; r != null;)
        u.unshift(r), _b = r, r = _b.prev;
    for (; i != null;)
        u.push(i), _c = i, i = _c.next;
    return u;
}
function pa(t, e) { var u; return (u = t.attribs) === null || u === void 0 ? void 0 : u[e]; }
function ga(t, e) { return t.attribs != null && Object.prototype.hasOwnProperty.call(t.attribs, e) && t.attribs[e] != null; }
function ma(t) { return t.name; }
function Qt(t) {
    var _b;
    var e = t.next;
    for (; e !== null && !P(e);)
        (_b = e, e = _b.next);
    return e;
}
function Zt(t) {
    var _b;
    var e = t.prev;
    for (; e !== null && !P(e);)
        (_b = e, e = _b.prev);
    return e;
}
function se(t) { if (t.prev && (t.prev.next = t.next), t.next && (t.next.prev = t.prev), t.parent) {
    var e = t.parent.children, u = e.lastIndexOf(t);
    u >= 0 && e.splice(u, 1);
} t.next = null, t.prev = null, t.parent = null; }
function xa(t, e) { var u = e.prev = t.prev; u && (u.next = e); var r = e.next = t.next; r && (r.prev = e); var i = e.parent = t.parent; if (i) {
    var s = i.children;
    s[s.lastIndexOf(t)] = e, t.parent = null;
} }
function va(t, e) { if (se(e), e.next = null, e.parent = t, t.children.push(e) > 1) {
    var u = t.children[t.children.length - 2];
    u.next = e, e.prev = u;
}
else
    e.prev = null; }
function wa(t, e) { se(e); var u = t.parent, r = t.next; if (e.next = r, e.prev = t, t.next = e, e.parent = u, r) {
    if (r.prev = e, u) {
        var i = u.children;
        i.splice(i.lastIndexOf(r), 0, e);
    }
}
else
    u && u.children.push(e); }
function ya(t, e) { if (se(e), e.parent = t, e.prev = null, t.children.unshift(e) !== 1) {
    var u = t.children[1];
    u.prev = e, e.next = u;
}
else
    e.next = null; }
function Jt(t, e) { se(e); var u = t.parent; if (u) {
    var r = u.children;
    r.splice(r.indexOf(t), 0, e);
} t.prev && (t.prev.next = e), e.parent = u, e.prev = t.prev, e.next = t, t.prev = e; }
function De(t, e, u, r) {
    if (u === void 0) { u = !0; }
    if (r === void 0) { r = 1 / 0; }
    return st(t, Array.isArray(e) ? e : [e], u, r);
}
function st(t, e, u, r) { var i = [], s = [Array.isArray(e) ? e : [e]], d = [0]; for (;;) {
    if (d[0] >= s[0].length) {
        if (d.length === 1)
            return i;
        s.shift(), d.shift();
        continue;
    }
    var b = s[0][d[0]++];
    if (t(b) && (i.push(b), --r <= 0))
        return i;
    u && W(b) && b.children.length > 0 && (d.unshift(0), s.unshift(b.children));
} }
function Sa(t, e) { return e.find(t); }
function ct(t, e, u) {
    if (u === void 0) { u = !0; }
    var r = Array.isArray(e) ? e : [e];
    for (var i = 0; i < r.length; i++) {
        var s = r[i];
        if (P(s) && t(s))
            return s;
        if (u && W(s) && s.children.length > 0) {
            var d = ct(t, s.children, !0);
            if (d)
                return d;
        }
    }
    return null;
}
function Qu(t, e) { return (Array.isArray(e) ? e : [e]).some(function (u) { return P(u) && t(u) || W(u) && Qu(t, u.children); }); }
function Aa(t, e) { var u = [], r = [Array.isArray(e) ? e : [e]], i = [0]; for (;;) {
    if (i[0] >= r[0].length) {
        if (r.length === 1)
            return u;
        r.shift(), i.shift();
        continue;
    }
    var s = r[0][i[0]++];
    P(s) && t(s) && u.push(s), W(s) && s.children.length > 0 && (i.unshift(0), r.unshift(s.children));
} }
var ot = { tag_name: function (t) { return typeof t == "function" ? function (e) { return P(e) && t(e.name); } : t === "*" ? P : function (e) { return P(e) && e.name === t; }; }, tag_type: function (t) { return typeof t == "function" ? function (e) { return t(e.type); } : function (e) { return e.type === t; }; }, tag_contains: function (t) { return typeof t == "function" ? function (e) { return re(e) && t(e.data); } : function (e) { return re(e) && e.data === t; }; } };
function Kt(t, e) { return typeof e == "function" ? function (u) { return P(u) && e(u.attribs[t]); } : function (u) { return P(u) && u.attribs[t] === e; }; }
function Ta(t, e) { return function (u) { return t(u) || e(u); }; }
function Zu(t) { var e = Object.keys(t).map(function (u) { var r = t[u]; return Object.prototype.hasOwnProperty.call(ot, u) ? ot[u](r) : Kt(u, r); }); return e.length === 0 ? null : e.reduce(Ta); }
function Ea(t, e) { var u = Zu(t); return u ? u(e) : !0; }
function ka(t, e, u, r) {
    if (r === void 0) { r = 1 / 0; }
    var i = Zu(t);
    return i ? De(i, e, u, r) : [];
}
function Na(t, e, u) {
    if (u === void 0) { u = !0; }
    return Array.isArray(e) || (e = [e]), ct(Kt("id", t), e, u);
}
function me(t, e, u, r) {
    if (u === void 0) { u = !0; }
    if (r === void 0) { r = 1 / 0; }
    return De(ot.tag_name(t), e, u, r);
}
function qa(t, e, u, r) {
    if (u === void 0) { u = !0; }
    if (r === void 0) { r = 1 / 0; }
    return De(Kt("class", t), e, u, r);
}
function Ca(t, e, u, r) {
    if (u === void 0) { u = !0; }
    if (r === void 0) { r = 1 / 0; }
    return De(ot.tag_type(t), e, u, r);
}
function Ia(t) { var e = t.length; for (; --e >= 0;) {
    var u = t[e];
    if (e > 0 && t.lastIndexOf(u, e - 1) >= 0) {
        t.splice(e, 1);
        continue;
    }
    for (var r = u.parent; r; r = r.parent)
        if (t.includes(r)) {
            t.splice(e, 1);
            break;
        }
} return t; }
var ee;
(function (t) { t[t.DISCONNECTED = 1] = "DISCONNECTED", t[t.PRECEDING = 2] = "PRECEDING", t[t.FOLLOWING = 4] = "FOLLOWING", t[t.CONTAINS = 8] = "CONTAINS", t[t.CONTAINED_BY = 16] = "CONTAINED_BY"; })(ee || (ee = {}));
function Ju(t, e) { var u = [], r = []; if (t === e)
    return 0; var i = W(t) ? t : t.parent; for (; i;)
    u.unshift(i), i = i.parent; for (i = W(e) ? e : e.parent; i;)
    r.unshift(i), i = i.parent; var s = Math.min(u.length, r.length), d = 0; for (; d < s && u[d] === r[d];)
    d++; if (d === 0)
    return ee.DISCONNECTED; var b = u[d - 1], p = b.children, g = u[d], A = r[d]; return p.indexOf(g) > p.indexOf(A) ? b === e ? ee.FOLLOWING | ee.CONTAINED_BY : ee.FOLLOWING : b === t ? ee.PRECEDING | ee.CONTAINS : ee.PRECEDING; }
function Yt(t) { return t = t.filter(function (e, u, r) { return !r.includes(e, u + 1); }), t.sort(function (e, u) { var r = Ju(e, u); return r & ee.PRECEDING ? -1 : r & ee.FOLLOWING ? 1 : 0; }), t; }
function eu(t) { var e = ft(Pa, t); return e ? e.name === "feed" ? Da(e) : La(e) : null; }
function Da(t) { var e; var u = t.children, r = { type: "atom", items: me("entry", u).map(function (d) { var b; var p = d.children, g = { media: Ku(p) }; Q(g, "id", "id", p), Q(g, "title", "title", p); var A = (b = ft("link", p)) === null || b === void 0 ? void 0 : b.attribs.href; A && (g.link = A); var D = de("summary", p) || de("content", p); D && (g.description = D); var N = de("updated", p); return N && (g.pubDate = new Date(N)), g; }) }; Q(r, "id", "id", u), Q(r, "title", "title", u); var i = (e = ft("link", u)) === null || e === void 0 ? void 0 : e.attribs.href; i && (r.link = i), Q(r, "description", "subtitle", u); var s = de("updated", u); return s && (r.updated = new Date(s)), Q(r, "author", "email", u, !0), r; }
function La(t) { var e, u; var r = (u = (e = ft("channel", t.children)) === null || e === void 0 ? void 0 : e.children) !== null && u !== void 0 ? u : [], i = { type: t.name.substr(0, 3), id: "", items: me("item", t.children).map(function (d) { var b = d.children, p = { media: Ku(b) }; Q(p, "id", "guid", b), Q(p, "title", "title", b), Q(p, "link", "link", b), Q(p, "description", "description", b); var g = de("pubDate", b) || de("dc:date", b); return g && (p.pubDate = new Date(g)), p; }) }; Q(i, "title", "title", r), Q(i, "link", "link", r), Q(i, "description", "description", r); var s = de("lastBuildDate", r); return s && (i.updated = new Date(s)), Q(i, "author", "managingEditor", r, !0), i; }
var Oa = ["url", "type", "lang"], Ua = ["fileSize", "bitrate", "framerate", "samplingrate", "channels", "duration", "height", "width"];
function Ku(t) { return me("media:content", t).map(function (e) {
    var e_4, _b, e_5, _c;
    var u = e.attribs, r = { medium: u.medium, isDefault: !!u.isDefault };
    try {
        for (var Oa_1 = __values(Oa), Oa_1_1 = Oa_1.next(); !Oa_1_1.done; Oa_1_1 = Oa_1.next()) {
            var i = Oa_1_1.value;
            u[i] && (r[i] = u[i]);
        }
    }
    catch (e_4_1) { e_4 = { error: e_4_1 }; }
    finally {
        try {
            if (Oa_1_1 && !Oa_1_1.done && (_b = Oa_1.return)) _b.call(Oa_1);
        }
        finally { if (e_4) throw e_4.error; }
    }
    try {
        for (var Ua_1 = __values(Ua), Ua_1_1 = Ua_1.next(); !Ua_1_1.done; Ua_1_1 = Ua_1.next()) {
            var i = Ua_1_1.value;
            u[i] && (r[i] = parseInt(u[i], 10));
        }
    }
    catch (e_5_1) { e_5 = { error: e_5_1 }; }
    finally {
        try {
            if (Ua_1_1 && !Ua_1_1.done && (_c = Ua_1.return)) _c.call(Ua_1);
        }
        finally { if (e_5) throw e_5.error; }
    }
    return u.expression && (r.expression = u.expression), r;
}); }
function ft(t, e) { return me(t, e, !0, 1)[0]; }
function de(t, e, u) {
    if (u === void 0) { u = !1; }
    return le(me(t, e, u, 1)).trim();
}
function Q(t, e, u, r, i) {
    if (i === void 0) { i = !1; }
    var s = de(u, r, i);
    s && (t[e] = s);
}
function Pa(t) { return t === "rss" || t === "feed" || t === "rdf:RDF"; }
function Yu(t, e) { var u = new Ce(void 0, e); return new Me(u, e).end(t), u.root; }
var C;
(function (t) { t.Attribute = "attribute", t.Pseudo = "pseudo", t.PseudoElement = "pseudo-element", t.Tag = "tag", t.Universal = "universal", t.Adjacent = "adjacent", t.Child = "child", t.Descendant = "descendant", t.Parent = "parent", t.Sibling = "sibling", t.ColumnCombinator = "column-combinator"; })(C || (C = {}));
var V;
(function (t) { t.Any = "any", t.Element = "element", t.End = "end", t.Equals = "equals", t.Exists = "exists", t.Hyphen = "hyphen", t.Not = "not", t.Start = "start"; })(V || (V = {}));
var er = /^[^\\#]?(?:\\(?:[\da-f]{1,6}\s?|.)|[\w\-\u00b0-\uFFFF])+/, Ma = /\\([\da-f]{1,6}\s?|(\s)|.)/gi, Ba = new Map([[126, V.Element], [94, V.Start], [36, V.End], [42, V.Any], [33, V.Not], [124, V.Hyphen]]), Ha = new Set(["has", "not", "matches", "is", "where", "host", "host-context"]);
function xe(t) { switch (t.type) {
    case C.Adjacent:
    case C.Child:
    case C.Descendant:
    case C.Parent:
    case C.Sibling:
    case C.ColumnCombinator: return !0;
    default: return !1;
} }
var _a = new Set(["contains", "icontains"]);
function Fa(t, e, u) { var r = parseInt(e, 16) - 65536; return r !== r || u ? e : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, r & 1023 | 56320); }
function Ge(t) { return t.replace(Ma, Fa); }
function tu(t) { return t === 39 || t === 34; }
function tr(t) { return t === 32 || t === 9 || t === 10 || t === 12 || t === 13; }
function he(t) { var e = [], u = ur(e, "".concat(t), 0); if (u < t.length)
    throw new Error("Unmatched selector: ".concat(t.slice(u))); return e; }
function ur(t, e, u) { var r = []; function i(N) { var q = e.slice(u + N).match(er); if (!q)
    throw new Error("Expected name, found ".concat(e.slice(u))); var _b = __read(q, 1), L = _b[0]; return u += N + L.length, Ge(L); } function s(N) { for (u += N; u < e.length && tr(e.charCodeAt(u));)
    u++; } function d() { u += 1; var N = u, q = 1; for (; q > 0 && u < e.length; u++)
    e.charCodeAt(u) === 40 && !b(u) ? q++ : e.charCodeAt(u) === 41 && !b(u) && q--; if (q)
    throw new Error("Parenthesis not matched"); return Ge(e.slice(N, u - 1)); } function b(N) { var q = 0; for (; e.charCodeAt(--N) === 92;)
    q++; return (q & 1) === 1; } function p() { if (r.length > 0 && xe(r[r.length - 1]))
    throw new Error("Did not expect successive traversals."); } function g(N) { if (r.length > 0 && r[r.length - 1].type === C.Descendant) {
    r[r.length - 1].type = N;
    return;
} p(), r.push({ type: N }); } function A(N, q) { r.push({ type: C.Attribute, name: N, action: q, value: i(1), namespace: null, ignoreCase: "quirks" }); } function D() { if (r.length && r[r.length - 1].type === C.Descendant && r.pop(), r.length === 0)
    throw new Error("Empty sub-selector"); t.push(r); } if (s(0), e.length === u)
    return u; e: for (; u < e.length;) {
    var N = e.charCodeAt(u);
    switch (N) {
        case 32:
        case 9:
        case 10:
        case 12:
        case 13: {
            (r.length === 0 || r[0].type !== C.Descendant) && (p(), r.push({ type: C.Descendant })), s(1);
            break;
        }
        case 62: {
            g(C.Child), s(1);
            break;
        }
        case 60: {
            g(C.Parent), s(1);
            break;
        }
        case 126: {
            g(C.Sibling), s(1);
            break;
        }
        case 43: {
            g(C.Adjacent), s(1);
            break;
        }
        case 46: {
            A("class", V.Element);
            break;
        }
        case 35: {
            A("id", V.Equals);
            break;
        }
        case 91: {
            s(1);
            var q = void 0, L = null;
            e.charCodeAt(u) === 124 ? q = i(1) : e.startsWith("*|", u) ? (L = "*", q = i(2)) : (q = i(0), e.charCodeAt(u) === 124 && e.charCodeAt(u + 1) !== 61 && (L = q, q = i(1))), s(0);
            var U = V.Exists, X = Ba.get(e.charCodeAt(u));
            if (X) {
                if (U = X, e.charCodeAt(u + 1) !== 61)
                    throw new Error("Expected `=`");
                s(2);
            }
            else
                e.charCodeAt(u) === 61 && (U = V.Equals, s(1));
            var J = "", F = null;
            if (U !== "exists") {
                if (tu(e.charCodeAt(u))) {
                    var h = e.charCodeAt(u), m = u + 1;
                    for (; m < e.length && (e.charCodeAt(m) !== h || b(m));)
                        m += 1;
                    if (e.charCodeAt(m) !== h)
                        throw new Error("Attribute value didn't end");
                    J = Ge(e.slice(u + 1, m)), u = m + 1;
                }
                else {
                    var h = u;
                    for (; u < e.length && (!tr(e.charCodeAt(u)) && e.charCodeAt(u) !== 93 || b(u));)
                        u += 1;
                    J = Ge(e.slice(h, u));
                }
                s(0);
                var o = e.charCodeAt(u) | 32;
                o === 115 ? (F = !1, s(1)) : o === 105 && (F = !0, s(1));
            }
            if (e.charCodeAt(u) !== 93)
                throw new Error("Attribute selector didn't terminate");
            u += 1;
            var T = { type: C.Attribute, name: q, action: U, value: J, namespace: L, ignoreCase: F };
            r.push(T);
            break;
        }
        case 58: {
            if (e.charCodeAt(u + 1) === 58) {
                r.push({ type: C.PseudoElement, name: i(2).toLowerCase(), data: e.charCodeAt(u) === 40 ? d() : null });
                continue;
            }
            var q = i(1).toLowerCase(), L = null;
            if (e.charCodeAt(u) === 40)
                if (Ha.has(q)) {
                    if (tu(e.charCodeAt(u + 1)))
                        throw new Error("Pseudo-selector ".concat(q, " cannot be quoted"));
                    if (L = [], u = ur(L, e, u + 1), e.charCodeAt(u) !== 41)
                        throw new Error("Missing closing parenthesis in :".concat(q, " (").concat(e, ")"));
                    u += 1;
                }
                else {
                    if (L = d(), _a.has(q)) {
                        var U = L.charCodeAt(0);
                        U === L.charCodeAt(L.length - 1) && tu(U) && (L = L.slice(1, -1));
                    }
                    L = Ge(L);
                }
            r.push({ type: C.Pseudo, name: q, data: L });
            break;
        }
        case 44: {
            D(), r = [], s(1);
            break;
        }
        default: {
            if (e.startsWith("/*", u)) {
                var U = e.indexOf("*/", u + 2);
                if (U < 0)
                    throw new Error("Comment was not terminated");
                u = U + 2, r.length === 0 && s(0);
                break;
            }
            var q = null, L = void 0;
            if (N === 42)
                u += 1, L = "*";
            else if (N === 124) {
                if (L = "", e.charCodeAt(u + 1) === 124) {
                    g(C.ColumnCombinator), s(2);
                    break;
                }
            }
            else if (er.test(e.slice(u)))
                L = i(0);
            else
                break e;
            e.charCodeAt(u) === 124 && e.charCodeAt(u + 1) !== 124 && (q = L, e.charCodeAt(u + 1) === 42 ? (L = "*", u += 2) : L = i(1)), r.push(L === "*" ? { type: C.Universal, namespace: q } : { type: C.Tag, name: L, namespace: q });
        }
    }
} return D(), u; }
var du = ge(be(), 1);
var ce = ge(be(), 1);
var ar = new Map([[C.Universal, 50], [C.Tag, 30], [C.Attribute, 1], [C.Pseudo, 0]]);
function $e(t) { return !ar.has(t.type); }
var Va = new Map([[V.Exists, 10], [V.Equals, 8], [V.Not, 7], [V.Start, 6], [V.End, 6], [V.Any, 5]]);
function uu(t) { var e = t.map(ir); for (var u = 1; u < t.length; u++) {
    var r = e[u];
    if (!(r < 0))
        for (var i = u - 1; i >= 0 && r < e[i]; i--) {
            var s = t[i + 1];
            t[i + 1] = t[i], t[i] = s, e[i + 1] = e[i], e[i] = r;
        }
} }
function ir(t) { var e, u; var r = (e = ar.get(t.type)) !== null && e !== void 0 ? e : -1; return t.type === C.Attribute ? (r = (u = Va.get(t.action)) !== null && u !== void 0 ? u : 4, t.action === V.Equals && t.name === "id" && (r = 9), t.ignoreCase && (r >>= 1)) : t.type === C.Pseudo && (t.data ? t.name === "has" || t.name === "contains" ? r = 0 : Array.isArray(t.data) ? (r = Math.min.apply(Math, __spreadArray([], __read(t.data.map(function (i) { return Math.min.apply(Math, __spreadArray([], __read(i.map(ir)), false)); })), false)), r < 0 && (r = 0)) : r = 2 : r = 3), r; }
var We = ge(be(), 1), za = /[-[\]{}()*+?.,\\^$|#\s]/g;
function nr(t) { return t.replace(za, "\\$&"); }
var Ra = new Set(["accept", "accept-charset", "align", "alink", "axis", "bgcolor", "charset", "checked", "clear", "codetype", "color", "compact", "declare", "defer", "dir", "direction", "disabled", "enctype", "face", "frame", "hreflang", "http-equiv", "lang", "language", "link", "media", "method", "multiple", "nohref", "noresize", "noshade", "nowrap", "readonly", "rel", "rev", "rules", "scope", "scrolling", "selected", "shape", "target", "text", "type", "valign", "valuetype", "vlink"]);
function ve(t, e) { return typeof t.ignoreCase == "boolean" ? t.ignoreCase : t.ignoreCase === "quirks" ? !!e.quirksMode : !e.xmlMode && Ra.has(t.name); }
var sr = { equals: function (t, e, u) { var r = u.adapter, i = e.name, s = e.value; return ve(e, u) ? (s = s.toLowerCase(), function (d) { var b = r.getAttributeValue(d, i); return b != null && b.length === s.length && b.toLowerCase() === s && t(d); }) : function (d) { return r.getAttributeValue(d, i) === s && t(d); }; }, hyphen: function (t, e, u) { var r = u.adapter, i = e.name, s = e.value, d = s.length; return ve(e, u) ? (s = s.toLowerCase(), function (p) { var g = r.getAttributeValue(p, i); return g != null && (g.length === d || g.charAt(d) === "-") && g.substr(0, d).toLowerCase() === s && t(p); }) : function (p) { var g = r.getAttributeValue(p, i); return g != null && (g.length === d || g.charAt(d) === "-") && g.substr(0, d) === s && t(p); }; }, element: function (t, e, u) { var r = u.adapter, i = e.name, s = e.value; if (/\s/.test(s))
        return We.default.falseFunc; var d = new RegExp("(?:^|\\s)".concat(nr(s), "(?:$|\\s)"), ve(e, u) ? "i" : ""); return function (p) { var g = r.getAttributeValue(p, i); return g != null && g.length >= s.length && d.test(g) && t(p); }; }, exists: function (t, _b, _c) {
        var e = _b.name;
        var u = _c.adapter;
        return function (r) { return u.hasAttrib(r, e) && t(r); };
    }, start: function (t, e, u) { var r = u.adapter, i = e.name, s = e.value, d = s.length; return d === 0 ? We.default.falseFunc : ve(e, u) ? (s = s.toLowerCase(), function (b) { var p = r.getAttributeValue(b, i); return p != null && p.length >= d && p.substr(0, d).toLowerCase() === s && t(b); }) : function (b) { var p; return !!(!((p = r.getAttributeValue(b, i)) === null || p === void 0) && p.startsWith(s)) && t(b); }; }, end: function (t, e, u) { var r = u.adapter, i = e.name, s = e.value, d = -s.length; return d === 0 ? We.default.falseFunc : ve(e, u) ? (s = s.toLowerCase(), function (b) { var p; return ((p = r.getAttributeValue(b, i)) === null || p === void 0 ? void 0 : p.substr(d).toLowerCase()) === s && t(b); }) : function (b) { var p; return !!(!((p = r.getAttributeValue(b, i)) === null || p === void 0) && p.endsWith(s)) && t(b); }; }, any: function (t, e, u) { var r = u.adapter, i = e.name, s = e.value; if (s === "")
        return We.default.falseFunc; if (ve(e, u)) {
        var d_1 = new RegExp(nr(s), "i");
        return function (p) { var g = r.getAttributeValue(p, i); return g != null && g.length >= s.length && d_1.test(g) && t(p); };
    } return function (d) { var b; return !!(!((b = r.getAttributeValue(d, i)) === null || b === void 0) && b.includes(s)) && t(d); }; }, not: function (t, e, u) { var r = u.adapter, i = e.name, s = e.value; return s === "" ? function (d) { return !!r.getAttributeValue(d, i) && t(d); } : ve(e, u) ? (s = s.toLowerCase(), function (d) { var b = r.getAttributeValue(d, i); return (b == null || b.length !== s.length || b.toLowerCase() !== s) && t(d); }) : function (d) { return r.getAttributeValue(d, i) !== s && t(d); }; } };
var ja = new Set([9, 10, 12, 13, 32]), cr = 48, Ga = 57;
function or(t) { if (t = t.trim().toLowerCase(), t === "even")
    return [2, 0]; if (t === "odd")
    return [2, 1]; var e = 0, u = 0, r = s(), i = d(); if (e < t.length && t.charAt(e) === "n" && (e++, u = r * (i != null ? i : 1), b(), e < t.length ? (r = s(), b(), i = d()) : r = i = 0), i === null || e < t.length)
    throw new Error("n-th rule couldn't be parsed ('".concat(t, "')")); return [u, r * i]; function s() { return t.charAt(e) === "-" ? (e++, -1) : (t.charAt(e) === "+" && e++, 1); } function d() { var p = e, g = 0; for (; e < t.length && t.charCodeAt(e) >= cr && t.charCodeAt(e) <= Ga;)
    g = g * 10 + (t.charCodeAt(e) - cr), e++; return e === p ? null : g; } function b() { for (; e < t.length && ja.has(t.charCodeAt(e));)
    e++; } }
var ru = ge(be(), 1);
function fr(t) { var e = t[0], u = t[1] - 1; if (u < 0 && e <= 0)
    return ru.default.falseFunc; if (e === -1)
    return function (s) { return s <= u; }; if (e === 0)
    return function (s) { return s === u; }; if (e === 1)
    return u < 0 ? ru.default.trueFunc : function (s) { return s >= u; }; var r = Math.abs(e), i = (u % r + r) % r; return e > 1 ? function (s) { return s >= u && s % r === i; } : function (s) { return s <= u && s % r === i; }; }
function Le(t) { return fr(or(t)); }
var Z = ge(be(), 1);
function lt(t, e) { return function (u) { var r = e.getParent(u); return r != null && e.isTag(r) && t(u); }; }
var Oe = { contains: function (t, e, _b) {
        var u = _b.adapter;
        return function (i) { return t(i) && u.getText(i).includes(e); };
    }, icontains: function (t, e, _b) {
        var u = _b.adapter;
        var r = e.toLowerCase();
        return function (s) { return t(s) && u.getText(s).toLowerCase().includes(r); };
    }, "nth-child": function (t, e, _b) {
        var u = _b.adapter, r = _b.equals;
        var i = Le(e);
        return i === Z.default.falseFunc ? Z.default.falseFunc : i === Z.default.trueFunc ? lt(t, u) : function (d) { var b = u.getSiblings(d), p = 0; for (var g = 0; g < b.length && !r(d, b[g]); g++)
            u.isTag(b[g]) && p++; return i(p) && t(d); };
    }, "nth-last-child": function (t, e, _b) {
        var u = _b.adapter, r = _b.equals;
        var i = Le(e);
        return i === Z.default.falseFunc ? Z.default.falseFunc : i === Z.default.trueFunc ? lt(t, u) : function (d) { var b = u.getSiblings(d), p = 0; for (var g = b.length - 1; g >= 0 && !r(d, b[g]); g--)
            u.isTag(b[g]) && p++; return i(p) && t(d); };
    }, "nth-of-type": function (t, e, _b) {
        var u = _b.adapter, r = _b.equals;
        var i = Le(e);
        return i === Z.default.falseFunc ? Z.default.falseFunc : i === Z.default.trueFunc ? lt(t, u) : function (d) { var b = u.getSiblings(d), p = 0; for (var g = 0; g < b.length; g++) {
            var A = b[g];
            if (r(d, A))
                break;
            u.isTag(A) && u.getName(A) === u.getName(d) && p++;
        } return i(p) && t(d); };
    }, "nth-last-of-type": function (t, e, _b) {
        var u = _b.adapter, r = _b.equals;
        var i = Le(e);
        return i === Z.default.falseFunc ? Z.default.falseFunc : i === Z.default.trueFunc ? lt(t, u) : function (d) { var b = u.getSiblings(d), p = 0; for (var g = b.length - 1; g >= 0; g--) {
            var A = b[g];
            if (r(d, A))
                break;
            u.isTag(A) && u.getName(A) === u.getName(d) && p++;
        } return i(p) && t(d); };
    }, root: function (t, e, _b) {
        var u = _b.adapter;
        return function (r) { var i = u.getParent(r); return (i == null || !u.isTag(i)) && t(r); };
    }, scope: function (t, e, u, r) { var i = u.equals; return !r || r.length === 0 ? Oe.root(t, e, u) : r.length === 1 ? function (s) { return i(r[0], s) && t(s); } : function (s) { return r.includes(s) && t(s); }; }, hover: au("isHovered"), visited: au("isVisited"), active: au("isActive") };
function au(t) { return function (u, r, _b) {
    var i = _b.adapter;
    var s = i[t];
    return typeof s != "function" ? Z.default.falseFunc : function (b) { return s(b) && u(b); };
}; }
var Xe = { empty: function (t, _b) {
        var e = _b.adapter;
        return !e.getChildren(t).some(function (u) { return e.isTag(u) || e.getText(u) !== ""; });
    }, "first-child": function (t, _b) {
        var e = _b.adapter, u = _b.equals;
        if (e.prevElementSibling)
            return e.prevElementSibling(t) == null;
        var r = e.getSiblings(t).find(function (i) { return e.isTag(i); });
        return r != null && u(t, r);
    }, "last-child": function (t, _b) {
        var e = _b.adapter, u = _b.equals;
        var r = e.getSiblings(t);
        for (var i = r.length - 1; i >= 0; i--) {
            if (u(t, r[i]))
                return !0;
            if (e.isTag(r[i]))
                break;
        }
        return !1;
    }, "first-of-type": function (t, _b) {
        var e = _b.adapter, u = _b.equals;
        var r = e.getSiblings(t), i = e.getName(t);
        for (var s = 0; s < r.length; s++) {
            var d = r[s];
            if (u(t, d))
                return !0;
            if (e.isTag(d) && e.getName(d) === i)
                break;
        }
        return !1;
    }, "last-of-type": function (t, _b) {
        var e = _b.adapter, u = _b.equals;
        var r = e.getSiblings(t), i = e.getName(t);
        for (var s = r.length - 1; s >= 0; s--) {
            var d = r[s];
            if (u(t, d))
                return !0;
            if (e.isTag(d) && e.getName(d) === i)
                break;
        }
        return !1;
    }, "only-of-type": function (t, _b) {
        var e = _b.adapter, u = _b.equals;
        var r = e.getName(t);
        return e.getSiblings(t).every(function (i) { return u(t, i) || !e.isTag(i) || e.getName(i) !== r; });
    }, "only-child": function (t, _b) {
        var e = _b.adapter, u = _b.equals;
        return e.getSiblings(t).every(function (r) { return u(t, r) || !e.isTag(r); });
    } };
function iu(t, e, u, r) { if (u === null) {
    if (t.length > r)
        throw new Error("Pseudo-class :".concat(e, " requires an argument"));
}
else if (t.length === r)
    throw new Error("Pseudo-class :".concat(e, " doesn't have any arguments")); }
var dt = { "any-link": ":is(a, area, link)[href]", link: ":any-link:not(:visited)", disabled: ":is(\n        :is(button, input, select, textarea, optgroup, option)[disabled],\n        optgroup[disabled] > option,\n        fieldset[disabled]:not(fieldset[disabled] legend:first-of-type *)\n    )", enabled: ":not(:disabled)", checked: ":is(:is(input[type=radio], input[type=checkbox])[checked], option:selected)", required: ":is(input, select, textarea)[required]", optional: ":is(input, select, textarea):not([required])", selected: "option:is([selected], select:not([multiple]):not(:has(> option[selected])) > :first-of-type)", checkbox: "[type=checkbox]", file: "[type=file]", password: "[type=password]", radio: "[type=radio]", reset: "[type=reset]", image: "[type=image]", submit: "[type=submit]", parent: ":not(:empty)", header: ":is(h1, h2, h3, h4, h5, h6)", button: ":is(button, input[type=button])", input: ":is(input, textarea, select, button)", text: "input:is(:not([type!='']), [type=text])" };
var te = ge(be(), 1);
var cu = {};
function ou(t, e) { return t === te.default.falseFunc ? te.default.falseFunc : function (u) { return e.isTag(u) && t(u); }; }
function fu(t, e) { var u = e.getSiblings(t); if (u.length <= 1)
    return []; var r = u.indexOf(t); return r < 0 || r === u.length - 1 ? [] : u.slice(r + 1).filter(e.isTag); }
function su(t) { return { xmlMode: !!t.xmlMode, lowerCaseAttributeNames: !!t.lowerCaseAttributeNames, lowerCaseTags: !!t.lowerCaseTags, quirksMode: !!t.quirksMode, cacheResults: !!t.cacheResults, pseudos: t.pseudos, adapter: t.adapter, equals: t.equals }; }
var nu = function (t, e, u, r, i) { var s = i(e, su(u), r); return s === te.default.trueFunc ? t : s === te.default.falseFunc ? te.default.falseFunc : function (d) { return s(d) && t(d); }; }, ht = { is: nu, matches: nu, where: nu, not: function (t, e, u, r, i) { var s = i(e, su(u), r); return s === te.default.falseFunc ? t : s === te.default.trueFunc ? te.default.falseFunc : function (d) { return !s(d) && t(d); }; }, has: function (t, e, u, r, i) { var s = u.adapter, d = su(u); d.relativeSelector = !0; var b = e.some(function (A) { return A.some($e); }) ? [cu] : void 0, p = i(e, d, b); if (p === te.default.falseFunc)
        return te.default.falseFunc; var g = ou(p, s); if (b && p !== te.default.trueFunc) {
        var _b = p.shouldTestNextSiblings, A_1 = _b === void 0 ? !1 : _b;
        return function (D) { if (!t(D))
            return !1; b[0] = D; var N = s.getChildren(D), q = A_1 ? __spreadArray(__spreadArray([], __read(N), false), __read(fu(D, s)), false) : N; return s.existsOne(g, q); };
    } return function (A) { return t(A) && s.existsOne(g, s.getChildren(A)); }; } };
function lr(t, e, u, r, i) { var s; var d = e.name, b = e.data; if (Array.isArray(b)) {
    if (!(d in ht))
        throw new Error("Unknown pseudo-class :".concat(d, "(").concat(b, ")"));
    return ht[d](t, b, u, r, i);
} var p = (s = u.pseudos) === null || s === void 0 ? void 0 : s[d], g = typeof p == "string" ? p : dt[d]; if (typeof g == "string") {
    if (b != null)
        throw new Error("Pseudo ".concat(d, " doesn't have any arguments"));
    var A = he(g);
    return ht.is(t, A, u, r, i);
} if (typeof p == "function")
    return iu(p, d, b, 1), function (A) { return p(A, b) && t(A); }; if (d in Oe)
    return Oe[d](t, b, u, r); if (d in Xe) {
    var A_2 = Xe[d];
    return iu(A_2, d, b, 2), function (D) { return A_2(D, u, b) && t(D); };
} throw new Error("Unknown pseudo-class :".concat(d)); }
function lu(t, e) { var u = e.getParent(t); return u && e.isTag(u) ? u : null; }
function dr(t, e, u, r, i) { var s = u.adapter, d = u.equals; switch (e.type) {
    case C.PseudoElement: throw new Error("Pseudo-elements are not supported by css-select");
    case C.ColumnCombinator: throw new Error("Column combinators are not yet supported by css-select");
    case C.Attribute: {
        if (e.namespace != null)
            throw new Error("Namespaced attributes are not yet supported by css-select");
        return (!u.xmlMode || u.lowerCaseAttributeNames) && (e.name = e.name.toLowerCase()), sr[e.action](t, e, u);
    }
    case C.Pseudo: return lr(t, e, u, r, i);
    case C.Tag: {
        if (e.namespace != null)
            throw new Error("Namespaced tag names are not yet supported by css-select");
        var b_1 = e.name;
        return (!u.xmlMode || u.lowerCaseTags) && (b_1 = b_1.toLowerCase()), function (g) { return s.getName(g) === b_1 && t(g); };
    }
    case C.Descendant: {
        if (u.cacheResults === !1 || typeof WeakSet == "undefined")
            return function (g) { var A = g; for (; A = lu(A, s);)
                if (t(A))
                    return !0; return !1; };
        var b_2 = new WeakSet;
        return function (g) { var A = g; for (; A = lu(A, s);)
            if (!b_2.has(A)) {
                if (s.isTag(A) && t(A))
                    return !0;
                b_2.add(A);
            } return !1; };
    }
    case "_flexibleDescendant": return function (p) { var g = p; do
        if (t(g))
            return !0;
    while (g = lu(g, s)); return !1; };
    case C.Parent: return function (p) { return s.getChildren(p).some(function (g) { return s.isTag(g) && t(g); }); };
    case C.Child: return function (p) { var g = s.getParent(p); return g != null && s.isTag(g) && t(g); };
    case C.Sibling: return function (p) { var g = s.getSiblings(p); for (var A = 0; A < g.length; A++) {
        var D = g[A];
        if (d(p, D))
            break;
        if (s.isTag(D) && t(D))
            return !0;
    } return !1; };
    case C.Adjacent: return s.prevElementSibling ? function (p) { var g = s.prevElementSibling(p); return g != null && t(g); } : function (p) { var g = s.getSiblings(p), A; for (var D = 0; D < g.length; D++) {
        var N = g[D];
        if (d(p, N))
            break;
        s.isTag(N) && (A = N);
    } return !!A && t(A); };
    case C.Universal: {
        if (e.namespace != null && e.namespace !== "*")
            throw new Error("Namespaced universal selectors are not yet supported by css-select");
        return t;
    }
} }
function hr(t, e, u) { var r = bt(t, e, u); return ou(r, e.adapter); }
function bt(t, e, u) { var r = typeof t == "string" ? he(t) : t; return pt(r, e, u); }
function br(t) { return t.type === C.Pseudo && (t.name === "scope" || Array.isArray(t.data) && t.data.some(function (e) { return e.some(br); })); }
var $a = { type: C.Descendant }, Wa = { type: "_flexibleDescendant" }, Xa = { type: C.Pseudo, name: "scope", data: null };
function Qa(t, _b, u) {
    var e_6, _c;
    var e = _b.adapter;
    var r = !!(u != null && u.every(function (i) { var s = e.isTag(i) && e.getParent(i); return i === cu || s && e.isTag(s); }));
    try {
        for (var t_1 = __values(t), t_1_1 = t_1.next(); !t_1_1.done; t_1_1 = t_1.next()) {
            var i = t_1_1.value;
            if (!(i.length > 0 && $e(i[0]) && i[0].type !== C.Descendant))
                if (r && !i.some(br))
                    i.unshift($a);
                else
                    continue;
            i.unshift(Xa);
        }
    }
    catch (e_6_1) { e_6 = { error: e_6_1 }; }
    finally {
        try {
            if (t_1_1 && !t_1_1.done && (_c = t_1.return)) _c.call(t_1);
        }
        finally { if (e_6) throw e_6.error; }
    }
}
function pt(t, e, u) { var r; t.forEach(uu), u = (r = e.context) !== null && r !== void 0 ? r : u; var i = Array.isArray(u), s = u && (Array.isArray(u) ? u : [u]); if (e.relativeSelector !== !1)
    Qa(t, e, s);
else if (t.some(function (p) { return p.length > 0 && $e(p[0]); }))
    throw new Error("Relative selectors are not allowed when the `relativeSelector` option is disabled"); var d = !1, b = t.map(function (p) { if (p.length >= 2) {
    var _b = __read(p, 2), g = _b[0], A = _b[1];
    g.type !== C.Pseudo || g.name !== "scope" || (i && A.type === C.Descendant ? p[1] = Wa : (A.type === C.Adjacent || A.type === C.Sibling) && (d = !0));
} return Za(p, e, s); }).reduce(Ja, ce.default.falseFunc); return b.shouldTestNextSiblings = d, b; }
function Za(t, e, u) { var r; return t.reduce(function (i, s) { return i === ce.default.falseFunc ? ce.default.falseFunc : dr(i, s, e, u, pt); }, (r = e.rootFunc) !== null && r !== void 0 ? r : ce.default.trueFunc); }
function Ja(t, e) { return e === ce.default.falseFunc || t === ce.default.trueFunc ? t : t === ce.default.falseFunc || e === ce.default.trueFunc ? e : function (r) { return t(r) || e(r); }; }
var pr = function (t, e) { return t === e; }, Ka = { adapter: ae, equals: pr };
function gr(t) { var e, u, r, i; var s = t != null ? t : Ka; return (e = s.adapter) !== null && e !== void 0 || (s.adapter = ae), (u = s.equals) !== null && u !== void 0 || (s.equals = (i = (r = s.adapter) === null || r === void 0 ? void 0 : r.equals) !== null && i !== void 0 ? i : pr), s; }
function hu(t) { return function (u, r, i) { var s = gr(r); return t(u, s, i); }; }
var Sn = hu(hr), An = hu(bt), gt = hu(pt);
function mr(t) { return function (u, r, i) { var s = gr(i); typeof u != "function" && (u = bt(u, s, r)); var d = mt(r, s.adapter, u.shouldTestNextSiblings); return t(u, d, s); }; }
function mt(t, e, u) {
    if (u === void 0) { u = !1; }
    return u && (t = Ya(t, e)), Array.isArray(t) ? e.removeSubsets(t) : e.getChildren(t);
}
function Ya(t, e) { var u = Array.isArray(t) ? t.slice(0) : [t], r = u.length; for (var i = 0; i < r; i++) {
    var s = fu(u[i], e);
    u.push.apply(u, __spreadArray([], __read(s), false));
} return u; }
var Tn = mr(function (t, e, u) { return t === du.default.falseFunc || !e || e.length === 0 ? [] : u.adapter.findAll(t, e); }), En = mr(function (t, e, u) { return t === du.default.falseFunc || !e || e.length === 0 ? null : u.adapter.findOne(t, e); });
var vt = ge(be(), 1);
var e0 = new Set(["first", "last", "eq", "gt", "nth", "lt", "even", "odd"]);
function Ue(t) { return t.type !== "pseudo" ? !1 : e0.has(t.name) ? !0 : t.name === "not" && Array.isArray(t.data) ? t.data.some(function (e) { return e.some(Ue); }) : !1; }
function xr(t, e, u) { var r = e != null ? parseInt(e, 10) : NaN; switch (t) {
    case "first": return 1;
    case "nth":
    case "eq": return isFinite(r) ? r >= 0 ? r + 1 : 1 / 0 : 0;
    case "lt": return isFinite(r) ? r >= 0 ? Math.min(r, u) : 1 / 0 : 0;
    case "gt": return isFinite(r) ? 1 / 0 : 0;
    case "odd": return 2 * u;
    case "even": return 2 * u - 1;
    case "last":
    case "not": return 1 / 0;
} }
function vr(t) { for (; t.parent;)
    t = t.parent; return t; }
function xt(t) {
    var e_7, _b;
    var e = [], u = [];
    try {
        for (var t_2 = __values(t), t_2_1 = t_2.next(); !t_2_1.done; t_2_1 = t_2.next()) {
            var r = t_2_1.value;
            r.some(Ue) ? e.push(r) : u.push(r);
        }
    }
    catch (e_7_1) { e_7 = { error: e_7_1 }; }
    finally {
        try {
            if (t_2_1 && !t_2_1.done && (_b = t_2.return)) _b.call(t_2);
        }
        finally { if (e_7) throw e_7.error; }
    }
    return [u, e];
}
var t0 = { type: C.Universal, namespace: null }, u0 = { type: C.Pseudo, name: "scope", data: null };
function gu(t, e, u) {
    if (u === void 0) { u = {}; }
    return r0([t], e, u);
}
function r0(t, e, u) {
    if (u === void 0) { u = {}; }
    if (typeof e == "function")
        return t.some(e);
    var _b = __read(xt(he(e)), 2), r = _b[0], i = _b[1];
    return r.length > 0 && t.some(gt(r, u)) || i.some(function (s) { return wr(s, t, u).length > 0; });
}
function a0(t, e, u, r) { var i = typeof u == "string" ? parseInt(u, 10) : NaN; switch (t) {
    case "first":
    case "lt": return e;
    case "last": return e.length > 0 ? [e[e.length - 1]] : e;
    case "nth":
    case "eq": return isFinite(i) && Math.abs(i) < e.length ? [i < 0 ? e[e.length + i] : e[i]] : [];
    case "gt": return isFinite(i) ? e.slice(i + 1) : [];
    case "even": return e.filter(function (s, d) { return d % 2 === 0; });
    case "odd": return e.filter(function (s, d) { return d % 2 === 1; });
    case "not": {
        var s_1 = new Set(i0(u, e, r));
        return e.filter(function (d) { return !s_1.has(d); });
    }
} }
function i0(t, e, u) { if (e.length === 0)
    return []; var _b = __read(xt(t), 2), r = _b[0], i = _b[1], s; if (r.length) {
    var d = pu(e, r, u);
    if (i.length === 0)
        return d;
    d.length && (s = new Set(d));
} for (var d = 0; d < i.length && (s == null ? void 0 : s.size) !== e.length; d++) {
    var b = i[d];
    if ((s ? e.filter(function (A) { return P(A) && !s.has(A); }) : e).length === 0)
        break;
    var g = wr(b, e, u);
    if (g.length)
        if (s)
            g.forEach(function (A) { return s.add(A); });
        else {
            if (d === i.length - 1)
                return g;
            s = new Set(g);
        }
} return typeof s != "undefined" ? s.size === e.length ? e : e.filter(function (d) { return s.has(d); }) : []; }
function wr(t, e, u) { var r; if (t.some(xe)) {
    var i = (r = u.root) !== null && r !== void 0 ? r : vr(e[0]), s = pe(ue({}, u), { context: e, relativeSelector: !1 });
    return t.push(u0), wt(i, t, s, !0, e.length);
} return wt(e, t, u, !1, e.length); }
function mu(t, e, u, r) {
    if (u === void 0) { u = {}; }
    if (r === void 0) { r = 1 / 0; }
    if (typeof t == "function")
        return yr(e, t);
    var _b = __read(xt(he(t)), 2), i = _b[0], s = _b[1], d = s.map(function (b) { return wt(e, b, u, !0, r); });
    return i.length && d.push(bu(e, i, u, r)), d.length === 0 ? [] : d.length === 1 ? d[0] : Yt(d.reduce(function (b, p) { return __spreadArray(__spreadArray([], __read(b), false), __read(p), false); }));
}
function wt(t, e, u, r, i) { var s = e.findIndex(Ue), d = e.slice(0, s), b = e[s], p = e.length - 1 === s ? i : 1 / 0, g = xr(b.name, b.data, p); if (g === 0)
    return []; var D = (d.length === 0 && !Array.isArray(t) ? it(t).filter(P) : d.length === 0 ? (Array.isArray(t) ? t : [t]).filter(P) : r || d.some(xe) ? bu(t, [d], u, g) : pu(t, [d], u)).slice(0, g), N = a0(b.name, D, b.data, u); if (N.length === 0 || e.length === s + 1)
    return N; var q = e.slice(s + 1), L = q.some(xe); if (L) {
    if (xe(q[0])) {
        var U = q[0].type;
        (U === C.Sibling || U === C.Adjacent) && (N = mt(N, ae, !0)), q.unshift(t0);
    }
    u = pe(ue({}, u), { relativeSelector: !1, rootFunc: function (U) { return N.includes(U); } });
}
else
    u.rootFunc && u.rootFunc !== vt.trueFunc && (u = pe(ue({}, u), { rootFunc: vt.trueFunc })); return q.some(Ue) ? wt(N, q, u, !1, i) : L ? bu(N, [q], u, i) : pu(N, [q], u); }
function bu(t, e, u, r) { var i = gt(e, u, t); return yr(t, i, r); }
function yr(t, e, u) {
    if (u === void 0) { u = 1 / 0; }
    var r = mt(t, ae, e.shouldTestNextSiblings);
    return st(function (i) { return P(i) && e(i); }, r, !0, u);
}
function pu(t, e, u) { var r = (Array.isArray(t) ? t : [t]).filter(P); if (r.length === 0)
    return r; var i = gt(e, u); return i === vt.trueFunc ? r : r.filter(i); }
var n0 = function (t, e, u) { return mu(t, e, u); }, Er = function (t, e, u) { return mu(t, e, u, 1)[0] || null; }, kr = /[\s ]+/g, Sr = new Set(["p", "div", "br", "li", "tr", "h1", "h2", "h3", "h4", "h5", "h6", "ul", "ol", "table", "section", "article", "header", "footer", "blockquote", "pre", "dd", "dt", "hr"]), s0 = { containsOwn: function (t, e) { return vu(t).toLowerCase().includes(String(e).toLowerCase()); }, matches: function (t, e) { return Ar(e).test(xu(t)); }, matchesOwn: function (t, e) { return Ar(e).test(vu(t)); }, containsData: function (t, e) { return le(t).includes(e); }, "contains-ci": function (t, e) { return xu(t).toLowerCase().includes(String(e).toLowerCase()); } };
function Ar(t) { try {
    return new RegExp(t);
}
catch (e) {
    return /$^/;
} }
var yt = { pseudos: s0, xmlMode: !1, lowerCaseTags: !0 };
function St(t) { return String(t).replace(/:contains\(/g, ":contains-ci(").replace(/:eq\((\d+)\)/g, ":eq($1)"); }
function xu(t) { if (!t)
    return ""; if (t.type === "text")
    return t.data; var e = "", u = function (r) {
    var e_8, _b;
    try {
        for (var _c = __values(r.children || []), _d = _c.next(); !_d.done; _d = _c.next()) {
            var i = _d.value;
            i.type === "text" ? e += i.data : (i.type === "tag" || i.type === "script" || i.type === "style") && (i.name === "br" ? e += " " : i.type === "tag" && (Sr.has(i.name) && (e += " "), u(i), Sr.has(i.name) && (e += " ")));
        }
    }
    catch (e_8_1) { e_8 = { error: e_8_1 }; }
    finally {
        try {
            if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
        }
        finally { if (e_8) throw e_8.error; }
    }
}; return u(t), e.replace(kr, " ").trim(); }
function vu(t) {
    var e_9, _b;
    var e = "";
    try {
        for (var _c = __values(t.children || []), _d = _c.next(); !_d.done; _d = _c.next()) {
            var u = _d.value;
            u.type === "text" && (e += u.data);
        }
    }
    catch (e_9_1) { e_9 = { error: e_9_1 }; }
    finally {
        try {
            if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
        }
        finally { if (e_9) throw e_9.error; }
    }
    return e.replace(kr, " ").trim();
}
function Nr(t, e) { if (!e)
    return ""; try {
    return new URL(e, t || void 0).href;
}
catch (u) {
    return t ? "" : e;
} }
var we = (function () {
    function t(e, u) {
        this.node = e, this.doc = u;
    }
    Object.defineProperty(t.prototype, "baseUri", {
        get: function () { return this.doc ? this.doc.__base : ""; },
        enumerable: false,
        configurable: true
    });
    t.prototype.select = function (e) { return ie.of(n0(St(e), this.node, yt), this.doc); };
    t.prototype.selectFirst = function (e) { var u = Er(St(e), this.node, yt); return u ? new t(u, this.doc) : null; };
    t.prototype.is = function (e) { return gu(this.node, St(e), yt); };
    t.prototype.text = function () { return xu(this.node); };
    t.prototype.ownText = function () { return vu(this.node); };
    t.prototype.wholeText = function () { return le(this.node); };
    t.prototype.data = function () { return (this.node.children || []).filter(function (e) { return e.type === "text"; }).map(function (e) { return e.data; }).join(""); };
    t.prototype.html = function () { return (this.node.children || []).map(function (e) { return Ie(e, { decodeEntities: !1 }); }).join("").trim(); };
    t.prototype.outerHtml = function () { return Ie(this.node, { decodeEntities: !1 }); };
    t.prototype.toString = function () { return this.outerHtml(); };
    t.prototype.tagName = function () { return this.node.name || ""; };
    t.prototype.nodeName = function () { return this.node.name || "#" + this.node.type; };
    t.prototype.id = function () { return this.attr("id"); };
    t.prototype.className = function () { return this.attr("class"); };
    t.prototype.classNames = function () { return this.className().split(/\s+/).filter(Boolean); };
    t.prototype.hasClass = function (e) { return this.classNames().includes(e); };
    t.prototype.attr = function (e, u) { if (u !== void 0)
        return this.node.attribs && (this.node.attribs[e] = String(u)), this; if (!this.node.attribs)
        return ""; if (e.startsWith("abs:"))
        return Nr(this.baseUri, this.node.attribs[e.slice(4)] || ""); var r = this.node.attribs[e]; return r == null ? "" : r; };
    t.prototype.absUrl = function (e) { return this.attr("abs:" + e); };
    t.prototype.hasAttr = function (e) { return !!(this.node.attribs && (e.startsWith("abs:") ? e.slice(4) : e) in this.node.attribs); };
    t.prototype.removeAttr = function (e) { return this.node.attribs && delete this.node.attribs[e], this; };
    t.prototype.attributes = function () { return Object.assign({}, this.node.attribs || {}); };
    t.prototype.dataset = function () {
        var e_10, _b;
        var e = {};
        try {
            for (var _c = __values(Object.entries(this.node.attribs || {})), _d = _c.next(); !_d.done; _d = _c.next()) {
                var _f = __read(_d.value, 2), u = _f[0], r = _f[1];
                u.startsWith("data-") && (e[u.slice(5)] = r);
            }
        }
        catch (e_10_1) { e_10 = { error: e_10_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
            }
            finally { if (e_10) throw e_10.error; }
        }
        return e;
    };
    t.prototype.val = function () { return this.attr("value"); };
    t.prototype.parent = function () { var e = this.node.parent; return e && e.type !== "root" ? new t(e, this.doc) : null; };
    t.prototype.parents = function () { var e = [], u = this.node.parent; for (; u && u.type !== "root";)
        e.push(u), u = u.parent; return ie.of(e, this.doc); };
    t.prototype.closest = function (e) { var u = this.node; for (; u && u.type !== "root";) {
        if (u.type === "tag" && gu(u, St(e), yt))
            return new t(u, this.doc);
        u = u.parent;
    } return null; };
    t.prototype.children = function () { return ie.of((this.node.children || []).filter(P), this.doc); };
    t.prototype.child = function (e) { var u = (this.node.children || []).filter(P)[e]; return u ? new t(u, this.doc) : null; };
    t.prototype.childrenSize = function () { return (this.node.children || []).filter(P).length; };
    t.prototype.nextElementSibling = function () { var e = Qt(this.node); return e ? new t(e, this.doc) : null; };
    t.prototype.previousElementSibling = function () { var e = Zt(this.node); return e ? new t(e, this.doc) : null; };
    t.prototype.siblingElements = function () {
        var _this = this;
        return ie.of(nt(this.node).filter(function (e) { return e !== _this.node && P(e); }), this.doc);
    };
    t.prototype.elementSiblingIndex = function () { return nt(this.node).filter(P).indexOf(this.node); };
    t.prototype.getElementsByTag = function (e) { return this.select(e); };
    t.prototype.getElementsByClass = function (e) { return this.select("." + e); };
    t.prototype.getElementById = function (e) { return this.selectFirst("#" + e); };
    t.prototype.remove = function () { return se(this.node), this; };
    t.prototype.empty = function () { return this.node.children = [], this; };
    t.prototype.textNodes = function () { return (this.node.children || []).filter(function (e) { return e.type === "text"; }).map(function (e) { return ({ text: function () { return e.data; }, toString: function () { return e.data; } }); }); };
    t.prototype.title = function () { var e = this.selectFirst("title"); return e ? e.text() : ""; };
    t.prototype.body = function () { return this.selectFirst("body") || this; };
    t.prototype.head = function () { return this.selectFirst("head") || this; };
    t.prototype.location = function () { return this.baseUri; };
    return t;
}()), yu = Object.create(Array.prototype), ie = { of: wu, prototype: yu };
function wu(t, e) {
    var e_11, _b;
    var u = [];
    try {
        for (var _c = __values(t || []), _d = _c.next(); !_d.done; _d = _c.next()) {
            var r = _d.value;
            u.push(r instanceof we ? r : new we(r, e));
        }
    }
    catch (e_11_1) { e_11 = { error: e_11_1 }; }
    finally {
        try {
            if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
        }
        finally { if (e_11) throw e_11.error; }
    }
    return Object.setPrototypeOf(u, yu), u;
}
var Tr = { size: function () { return this.length; }, isEmpty: function () { return this.length === 0; }, get: function (t) { return this[t] || null; }, first: function () { return this[0] || null; }, last: function () { return this[this.length - 1] || null; }, eq: function (t) { return ie.of(this[t] ? [this[t]] : [], null); }, text: function () { return this.map(function (t) { return t.text(); }).filter(Boolean).join(" "); }, eachText: function () { return this.map(function (t) { return t.text(); }).filter(Boolean); }, html: function () {
        return this.map(function (t) { return t.html(); }).join("\n");
    }, outerHtml: function () {
        return this.map(function (t) { return t.outerHtml(); }).join("\n");
    }, toString: function () { return this.outerHtml(); }, attr: function (t, e) {
        var e_12, _b;
        if (e !== void 0)
            return this.forEach(function (u) { return u.attr(t, e); }), this;
        try {
            for (var _c = __values(this), _d = _c.next(); !_d.done; _d = _c.next()) {
                var u = _d.value;
                if (u.hasAttr(t))
                    return u.attr(t);
            }
        }
        catch (e_12_1) { e_12 = { error: e_12_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
            }
            finally { if (e_12) throw e_12.error; }
        }
        return "";
    }, eachAttr: function (t) { return this.filter(function (e) { return e.hasAttr(t); }).map(function (e) { return e.attr(t); }); }, hasAttr: function (t) { return this.some(function (e) { return e.hasAttr(t); }); }, hasClass: function (t) { return this.some(function (e) { return e.hasClass(t); }); }, val: function () { return this.length ? this[0].val() : ""; }, select: function (t) {
        var e_13, _b, e_14, _c;
        var e = wu([]), u = new Set;
        try {
            for (var _d = __values(this), _f = _d.next(); !_f.done; _f = _d.next()) {
                var r = _f.value;
                try {
                    for (var _g = (e_14 = void 0, __values(r.select(t))), _h = _g.next(); !_h.done; _h = _g.next()) {
                        var i = _h.value;
                        u.has(i.node) || (u.add(i.node), e.push(i));
                    }
                }
                catch (e_14_1) { e_14 = { error: e_14_1 }; }
                finally {
                    try {
                        if (_h && !_h.done && (_c = _g.return)) _c.call(_g);
                    }
                    finally { if (e_14) throw e_14.error; }
                }
            }
        }
        catch (e_13_1) { e_13 = { error: e_13_1 }; }
        finally {
            try {
                if (_f && !_f.done && (_b = _d.return)) _b.call(_d);
            }
            finally { if (e_13) throw e_13.error; }
        }
        return e;
    }, selectFirst: function (t) {
        var e_15, _b;
        try {
            for (var _c = __values(this), _d = _c.next(); !_d.done; _d = _c.next()) {
                var e = _d.value;
                var u = e.selectFirst(t);
                if (u)
                    return u;
            }
        }
        catch (e_15_1) { e_15 = { error: e_15_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
            }
            finally { if (e_15) throw e_15.error; }
        }
        return null;
    }, is: function (t) { return this.some(function (e) { return e.is(t); }); }, not: function (t) { return ie.of(this.filter(function (e) { return !e.is(t); }), null); }, parents: function () {
        var e_16, _b;
        var t = wu([]);
        try {
            for (var _c = __values(this), _d = _c.next(); !_d.done; _d = _c.next()) {
                var e = _d.value;
                t.push.apply(t, __spreadArray([], __read(e.parents()), false));
            }
        }
        catch (e_16_1) { e_16 = { error: e_16_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
            }
            finally { if (e_16) throw e_16.error; }
        }
        return t;
    }, next: function () { return ie.of(this.map(function (t) { return t.nextElementSibling(); }).filter(Boolean), null); }, prev: function () { return ie.of(this.map(function (t) { return t.previousElementSibling(); }).filter(Boolean), null); }, remove: function () { return this.forEach(function (t) { return t.remove(); }), this; }, empty: function () { return this.forEach(function (t) { return t.empty(); }), this; }, removeAttr: function (t) { return this.forEach(function (e) { return e.removeAttr(t); }), this; } };
try {
    for (var _c = __values(Object.keys(Tr)), _d = _c.next(); !_d.done; _d = _c.next()) {
        var t = _d.value;
        Object.defineProperty(yu, t, { value: Tr[t], writable: !0, configurable: !0 });
    }
}
catch (e_1_1) { e_1 = { error: e_1_1 }; }
finally {
    try {
        if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
    }
    finally { if (e_1) throw e_1.error; }
}
function At(t, e) { var u = Yu(String(t == null ? "" : t), { decodeEntities: !0, lowerCaseAttributeNames: !0 }), r = new we(u, null); r.doc = r, r.__base = e || ""; var i = Er("base[href]", u); return i && i.attribs.href && (r.__base = Nr(r.__base, i.attribs.href)), r; }
function qr(t, e) { var u = new Set((e || ["p", "br", "b", "i", "em", "strong", "img", "div", "span"]).map(String)), r = At(t), i = function (s) {
    var e_17, _b, e_18, _c;
    try {
        for (var _d = __values((s.children || []).slice()), _f = _d.next(); !_f.done; _f = _d.next()) {
            var d = _f.value;
            if (d.type === "script" || d.type === "style" || d.type === "comment") {
                se(d);
                continue;
            }
            if (d.type === "tag" && (i(d), !u.has(d.name))) {
                var b = (d.children || []).slice();
                try {
                    for (var b_3 = (e_18 = void 0, __values(b)), b_3_1 = b_3.next(); !b_3_1.done; b_3_1 = b_3.next()) {
                        var p = b_3_1.value;
                        Jt(d, p);
                    }
                }
                catch (e_18_1) { e_18 = { error: e_18_1 }; }
                finally {
                    try {
                        if (b_3_1 && !b_3_1.done && (_c = b_3.return)) _c.call(b_3);
                    }
                    finally { if (e_18) throw e_18.error; }
                }
                se(d);
            }
        }
    }
    catch (e_17_1) { e_17 = { error: e_17_1 }; }
    finally {
        try {
            if (_f && !_f.done && (_b = _d.return)) _b.call(_d);
        }
        finally { if (e_17) throw e_17.error; }
    }
}; return i(r.node), Ie(r.node.children, { decodeEntities: !1 }); }
var Tt = "Mozilla/5.0 (Linux; Android 14; SM-S918B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36";
function c0(t) { if (typeof Buffer != "undefined")
    return Buffer.from(t).toString("base64"); var e = ""; for (var u = 0; u < t.length; u++)
    e += String.fromCharCode(t[u]); return btoa(e); }
function Cr(t) { return typeof TextEncoder != "undefined" ? new TextEncoder().encode(t) : Uint8Array.from(unescape(encodeURIComponent(t)), function (e) { return e.charCodeAt(0); }); }
var Su = (function () {
    function Su(e, u) {
        this.status = e.status | 0, this.ok = this.status >= 200 && this.status < 300, this.statusText = e.statusText || String(this.status), this.url = e.url || u.url, this.headers = e.headers || {}, this._raw = e, this.request = { url: u.url, headers: u.headers || {} };
    }
    Su.prototype.header = function (e) { var u = Object.keys(this.headers).find(function (r) { return r.toLowerCase() === String(e).toLowerCase(); }); return u ? this.headers[u] : ""; };
    Su.prototype.text = function (e) { if (e && this._raw.bytes && typeof TextDecoder != "undefined")
        try {
            return new TextDecoder(String(e).toLowerCase()).decode(this._raw.bytes);
        }
        catch (u) { } return this._raw.text == null ? "" : String(this._raw.text); };
    Su.prototype.string = function (e) { return this.text(e); };
    Su.prototype.html = function (e) { return At(this.text(e), this.url); };
    Su.prototype.json = function () { try {
        return JSON.parse(this.text());
    }
    catch (e) {
        return null;
    } };
    Su.prototype.base64 = function () { return c0(this._raw.bytes || Cr(this.text())); };
    Su.prototype.blob = function () { var e = this; return { size: (this._raw.bytes || Cr(this.text())).length, type: this.header("content-type"), base64: function () { return e.base64(); } }; };
    return Su;
}());
function o0(t) {
    var e_19, _b;
    var e = {};
    if (!t)
        return e;
    if (typeof t.forEach == "function" && !Array.isArray(t) && typeof t.entries == "function")
        return t.forEach(function (u, r) { e[r] = u; }), e;
    try {
        for (var _c = __values(Object.keys(t)), _d = _c.next(); !_d.done; _d = _c.next()) {
            var u = _d.value;
            e[u] = String(t[u]);
        }
    }
    catch (e_19_1) { e_19 = { error: e_19_1 }; }
    finally {
        try {
            if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
        }
        finally { if (e_19) throw e_19.error; }
    }
    return e;
}
function Dr(t, e) { var u = function (d) { return ({ getItem: function (b) { var p = t.storageGet(d + b); return p == null ? null : p; }, setItem: function (b, p) { return t.storageSet(d + b, p == null ? null : String(p)); }, removeItem: function (b) { return t.storageSet(d + b, null); }, clear: function () { return t.storageClear && t.storageClear(d); } }); }, r = "__cookie__", i = {}; i.Response = { success: function (d, b) { return ({ code: 0, data: d === void 0 ? null : d, data2: b === void 0 ? null : b }); }, error: function (d) { return ({ code: 1, data: d == null ? "" : String(d) }); } }, i.fetch = function (b, p) {
    return __awaiter(this, void 0, void 0, function () { var g, U, A, D, N, U, q, L, U_1; return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                p = p || {};
                g = String(b);
                if (p.queries) {
                    U = Object.entries(p.queries).map(function (_b) {
                        var _c = __read(_b, 2), X = _c[0], J = _c[1];
                        return encodeURIComponent(X) + "=" + encodeURIComponent(J);
                    }).join("&");
                    U && (g += (g.includes("?") ? "&" : "?") + U);
                }
                A = Object.assign({ "User-Agent": Tt }, o0(p.headers)), D = t.storageGet(r);
                D && !Object.keys(A).some(function (U) { return U.toLowerCase() === "cookie"; }) && (A.Cookie = D);
                N = p.body;
                if (N != null && typeof N == "object") {
                    U = Object.keys(A).find(function (X) { return X.toLowerCase() === "content-type"; });
                    U && /json/i.test(A[U]) ? N = JSON.stringify(N) : (N = Object.entries(N).map(function (_b) {
                        var _c = __read(_b, 2), X = _c[0], J = _c[1];
                        return encodeURIComponent(X) + "=" + encodeURIComponent(J);
                    }).join("&"), U || (A["Content-Type"] = "application/x-www-form-urlencoded"));
                }
                q = { url: g, method: (p.method || (N != null ? "POST" : "GET")).toUpperCase(), headers: A, body: N, timeout: p.timeout };
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4, t.request(q)];
            case 2:
                L = _b.sent();
                return [3, 4];
            case 3:
                U_1 = _b.sent();
                L = { status: 0, url: g, headers: {}, text: "", error: String(U_1 && U_1.message || U_1) };
                return [3, 4];
            case 4: return [2, new Su(L, q)];
        }
    }); });
}, i.Http = { get: function (d) { return Ir(i, "GET", d); }, post: function (d) { return Ir(i, "POST", d); } }, i.Html = { parse: function (d, b) { return At(d, b || ""); }, clean: function (d, b) { return qr(d, b); } }, i.localStorage = u("ls:"), i.cacheStorage = u("cs:"), i.localConfig = { getItem: function (d) { return t.config(d); } }, i.localCookie = { setCookie: function (d) { t.storageSet(r, String(d).split(";")[0]); }, getCookie: function () { return t.storageGet(r) || ""; } }, i.sleep = function (d) { return new Promise(function (b) { return setTimeout(b, Math.min(Number(d) || 0, 1e4)); }); }; var s = function () {
    var d = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        d[_i] = arguments[_i];
    }
    try {
        t.log && t.log(d.map(function (b) { return typeof b == "string" ? b : JSON.stringify(b); }).join(" "));
    }
    catch (b) { }
}; return i.Log = { log: s }, i.console = { log: s, error: s, warn: s, info: s }, i.log = s, i.UserAgent = { system: function () { return Tt; }, chrome: function () { return Tt; }, android: function () { return Tt; }, ios: function () { return "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1"; } }, i.Engine = { newBrowser: function () { throw new Error("Headless browser is not available in this app (" + (t.name || "host") + ")"); } }, i.Graphics = { createCanvas: function () { throw new Error("Graphics API is not available in this app"); }, createImage: function () { throw new Error("Graphics API is not available in this app"); } }, i.Script = { execute: function () { throw new Error("Script.execute is not available"); } }, i.Elements = ie, i.Element = we, i.__meta = e, i; }
function Ir(t, e, u) { var r = { method: e, url: u, headers: {}, body: void 0, queries: void 0 }, i = { headers: function (s) { return Object.assign(r.headers, s || {}), i; }, header: function (s, d) { return r.headers[s] = d, i; }, params: function (s) { return r.queries = s, i; }, queries: function (s) { return r.queries = s, i; }, body: function (s) { return r.body = s, i; }, html: function (s) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, t.fetch(r.url, r)];
                case 1: return [2, (_b.sent()).html(s)];
            }
        }); });
    }, string: function (s) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, t.fetch(r.url, r)];
                case 1: return [2, (_b.sent()).text(s)];
            }
        }); });
    }, text: function (s) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, t.fetch(r.url, r)];
                case 1: return [2, (_b.sent()).text(s)];
            }
        }); });
    }, json: function () {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, t.fetch(r.url, r)];
                case 1: return [2, (_b.sent()).json()];
            }
        }); });
    } }; return i; }
function ye(t, e) { if (!e)
    return ""; if (e = String(e).trim(), /^data:|^blob:/.test(e))
    return e; if (e.startsWith("//"))
    return "https:" + e; if (typeof URL == "undefined")
    return __abs(t, e); try {
    return new URL(e, t).href;
}
catch (u) {
    return e;
} }
var _ = function (t) { return t == null ? "" : String(t); }, f0 = function (t) { return t.filter(function (e, u) { return e && t.indexOf(e) === u; }); }, Et = (function () {
    function class_1(e) {
        var u = e.meta, r = e.scripts, i = e.host;
        this.meta = u, this.host = i, this.env = e.env || Dr(i, u), this.scripts = r, this.cache = {}, this.tokens = {};
    }
    Object.defineProperty(class_1.prototype, "base", {
        get: function () { return _(this.host.config("DOMAIN") || this.meta.source).replace(/\/+$/, ""); },
        enumerable: false,
        configurable: true
    });
    class_1.prototype.has = function (e) { return !!this.scripts[e]; };
    class_1.prototype.run = function (e) {
        var u = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            u[_i - 1] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function () {
            var r, i, s, d;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        r = this.scripts[e];
                        if (!r)
                            throw new Error("script " + e + " missing");
                        i = function (b) { var p = _this.host.config(b); return p == null ? (_this.meta.configDefaults || {})[b] : p; };
                        return [4, r(this.env, i)];
                    case 1:
                        s = _b.sent();
                        if (typeof s != "function")
                            throw new Error(e + ": execute() not defined");
                        return [4, s.apply(void 0, __spreadArray([], __read(u.map(_)), false))];
                    case 2:
                        d = _b.sent();
                        if (!d)
                            throw new Error(e + ": empty result");
                        if (d.code !== 0)
                            throw new Error(e + ": " + _(d.data || "error"));
                        return [2, d];
                }
            });
        });
    };
    class_1.prototype.scriptFile = function (e) { return _(e).replace(/\.js$/, ""); };
    class_1.prototype.tabs = function () {
        return __awaiter(this, void 0, void 0, function () { var e, _b, u_1, u_2; return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    if (this.cache.tabs)
                        return [2, this.cache.tabs];
                    e = [];
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 4, , 5]);
                    _b = this.has("home");
                    if (!_b) return [3, 3];
                    return [4, this.run("home")];
                case 2:
                    _b = (e = (_c.sent()).data || []);
                    _c.label = 3;
                case 3:
                    _b;
                    return [3, 5];
                case 4:
                    u_1 = _c.sent();
                    this.host.log && this.host.log("home: " + u_1.message);
                    return [3, 5];
                case 5:
                    if (!(!e.length && this.has("genre"))) return [3, 9];
                    _c.label = 6;
                case 6:
                    _c.trys.push([6, 8, , 9]);
                    return [4, this.run("genre")];
                case 7:
                    e = ((_c.sent()).data || []).slice(0, 2);
                    return [3, 9];
                case 8:
                    u_2 = _c.sent();
                    return [3, 9];
                case 9: return [2, (this.cache.tabs = e.filter(function (u) { return u && u.script; }), this.cache.tabs)];
            }
        }); });
    };
    class_1.prototype.list = function (e, u, r) {
        return __awaiter(this, void 0, void 0, function () {
            var i, s, d, b, p;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        i = e + "|" + u;
                        r = Math.max(1, r | 0);
                        s = r === 1 ? "" : this.tokens[i + "|" + r];
                        if (r > 1 && s == null)
                            return [2, { items: [], hasNext: !1 }];
                        return [4, this.run(e, u, s)];
                    case 1:
                        d = _b.sent(), b = _(d.data2);
                        b && (this.tokens[i + "|" + (r + 1)] = b);
                        p = (d.data || []).filter(Boolean).map(function (g) { return ({ name: _(g.name).trim(), link: ye(g.host || _this.base + "/", g.link), cover: ye(g.host || _this.base + "/", g.cover), description: _(g.description), tag: _(g.tag) }); }).filter(function (g) { return g.name && g.link; });
                        return [2, { items: p, hasNext: !!b && p.length > 0 }];
                }
            });
        });
    };
    class_1.prototype.popular = function (e) {
        return __awaiter(this, void 0, void 0, function () { var u; return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, this.tabs()];
                case 1:
                    u = _b.sent();
                    return [2, u[0] ? this.list(this.scriptFile(u[0].script), _(u[0].input), e) : this.search("", e)];
            }
        }); });
    };
    class_1.prototype.latest = function (e) {
        return __awaiter(this, void 0, void 0, function () { var u, r; return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, this.tabs()];
                case 1:
                    u = _b.sent(), r = u[1] || u[0];
                    return [2, r ? this.list(this.scriptFile(r.script), _(r.input), e) : this.search("", e)];
            }
        }); });
    };
    class_1.prototype.search = function (e, u) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            return [2, this.has("search") ? this.list("search", e, u) : { items: [], hasNext: !1 }];
        }); });
    };
    class_1.prototype.detail = function (e) {
        return __awaiter(this, void 0, void 0, function () { var u, r; return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, this.run("detail", e)];
                case 1:
                    u = (_b.sent()).data || {}, r = [].concat(u.genres || [], u.tags || []).map(function (i) { return typeof i == "string" ? i : i && i.title; }).filter(Boolean);
                    return [2, { name: _(u.name).trim(), cover: ye(u.host || this.base + "/", u.cover), author: _(u.author).trim(), description: Lr(_(u.description)), detail: Lr(_(u.detail)), ongoing: u.ongoing !== !1 && u.ongoing !== "false", genres: f0(r.map(function (i) { return String(i).trim(); })), url: e, format: _(u.format) }];
            }
        }); });
    };
    class_1.prototype.chapters = function (e) {
        return __awaiter(this, void 0, void 0, function () {
            var u, r, r_1, r_1_1, i, _b, _c, e_20_1, _d;
            var e_20, _f;
            var _this = this;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        u = [];
                        if (!(this.meta.type === "novel" && this.has("page") && this.has("toc"))) return [3, 10];
                        return [4, this.run("page", e)];
                    case 1:
                        r = (_g.sent()).data || [e];
                        _g.label = 2;
                    case 2:
                        _g.trys.push([2, 7, 8, 9]);
                        r_1 = __values(r), r_1_1 = r_1.next();
                        _g.label = 3;
                    case 3:
                        if (!!r_1_1.done) return [3, 6];
                        i = r_1_1.value;
                        _c = (_b = u).concat;
                        return [4, this.run("toc", _(i))];
                    case 4:
                        u = _c.apply(_b, [(_g.sent()).data || []]);
                        _g.label = 5;
                    case 5:
                        r_1_1 = r_1.next();
                        return [3, 3];
                    case 6: return [3, 9];
                    case 7:
                        e_20_1 = _g.sent();
                        e_20 = { error: e_20_1 };
                        return [3, 9];
                    case 8:
                        try {
                            if (r_1_1 && !r_1_1.done && (_f = r_1.return)) _f.call(r_1);
                        }
                        finally { if (e_20) throw e_20.error; }
                        return [7];
                    case 9: return [3, 13];
                    case 10:
                        _d = this.has("toc");
                        if (!_d) return [3, 12];
                        return [4, this.run("toc", e)];
                    case 11:
                        _d = (u = (_g.sent()).data || []);
                        _g.label = 12;
                    case 12:
                        _d;
                        _g.label = 13;
                    case 13: return [2, u.filter(function (r) { return r && r.url && r.type !== "section"; }).map(function (r, i) { return ({ name: _(r.name).trim() || "#" + (i + 1), url: ye(r.host || _this.base + "/", r.url), pay: !!(r.pay || r.lock) }); })];
                }
            });
        });
    };
    class_1.prototype.pages = function (e) {
        return __awaiter(this, void 0, void 0, function () {
            var u, _b, _c;
            var _this = this;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (!(this.has("chap") && this.meta.type === "comic")) return [3, 2];
                        return [4, this.run("chap", e)];
                    case 1:
                        _b = u = (_d.sent()).data;
                        return [3, 6];
                    case 2:
                        if (!this.has("page")) return [3, 4];
                        return [4, this.run("page", e)];
                    case 3:
                        _c = u = (_d.sent()).data;
                        return [3, 5];
                    case 4:
                        _c = u = [e];
                        _d.label = 5;
                    case 5:
                        _b = _c;
                        _d.label = 6;
                    case 6: return [2, (_b, typeof u == "string" && (u = u.split(/[\n,]+/)), (u || []).map(function (r) { return ye(_this.base + "/", typeof r == "string" ? r : r && (r.link || r.url || r.data)); }).filter(Boolean))];
                }
            });
        });
    };
    class_1.prototype.content = function (e) {
        return __awaiter(this, void 0, void 0, function () { var u; return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, this.run("chap", e)];
                case 1:
                    u = _b.sent();
                    return [2, { html: _(u.data), title: _(u.data2) }];
            }
        }); });
    };
    class_1.prototype.videos = function (e) {
        return __awaiter(this, void 0, void 0, function () {
            var u, i, r, u_3, u_3_1, i, s, d, d_2, d_2_1, b, s_2, e_21_1;
            var e_21, _b, e_22, _c;
            var _this = this;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        u = [{ title: "Default", data: e }];
                        if (!this.has("chap")) return [3, 2];
                        return [4, this.run("chap", e)];
                    case 1:
                        i = (_d.sent()).data;
                        Array.isArray(i) && i.length && (u = i.map(function (s) { return typeof s == "string" ? { title: "Server", data: s } : { title: _(s.title || s.name || "Server"), data: _(s.data || s.url || s.link) }; }));
                        _d.label = 2;
                    case 2:
                        r = [];
                        _d.label = 3;
                    case 3:
                        _d.trys.push([3, 10, 11, 12]);
                        u_3 = __values(u), u_3_1 = u_3.next();
                        _d.label = 4;
                    case 4:
                        if (!!u_3_1.done) return [3, 9];
                        i = u_3_1.value;
                        _d.label = 5;
                    case 5:
                        _d.trys.push([5, 7, , 8]);
                        return [4, this.run("track", i.data)];
                    case 6:
                        s = (_d.sent()).data || {}, d = Array.isArray(s) ? s : [s];
                        try {
                            for (d_2 = (e_22 = void 0, __values(d)), d_2_1 = d_2.next(); !d_2_1.done; d_2_1 = d_2.next()) {
                                b = d_2_1.value;
                                !b || !b.data || b.type !== "webview" && r.push({ url: ye(b.host || this.base + "/", b.data), quality: i.title + (b.quality ? " " + b.quality : ""), headers: b.headers || { Referer: this.base + "/" }, subtitles: (b.subtitles || (b.subtitle ? [{ data: b.subtitle, label: "Sub" }] : [])).map(function (p) { return ({ file: ye(_this.base + "/", p.data || p.file), label: _(p.label || p.language || "Sub") }); }), mimeType: _(b.mimeType) });
                            }
                        }
                        catch (e_22_1) { e_22 = { error: e_22_1 }; }
                        finally {
                            try {
                                if (d_2_1 && !d_2_1.done && (_c = d_2.return)) _c.call(d_2);
                            }
                            finally { if (e_22) throw e_22.error; }
                        }
                        return [3, 8];
                    case 7:
                        s_2 = _d.sent();
                        this.host.log && this.host.log("track " + i.title + ": " + s_2.message);
                        return [3, 8];
                    case 8:
                        u_3_1 = u_3.next();
                        return [3, 4];
                    case 9: return [3, 12];
                    case 10:
                        e_21_1 = _d.sent();
                        e_21 = { error: e_21_1 };
                        return [3, 12];
                    case 11:
                        try {
                            if (u_3_1 && !u_3_1.done && (_b = u_3.return)) _b.call(u_3);
                        }
                        finally { if (e_21) throw e_21.error; }
                        return [7];
                    case 12: return [2, r];
                }
            });
        });
    };
    return class_1;
}());
function Lr(t) {
    return String(t).replace(/<br\s*\/?>/gi, "\n").replace(/<\/p>/gi, "\n").replace(/<[^>]+>/g, "").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/\n{3,}/g, "\n\n").trim();
}
function j(t, e) {
    return __awaiter(this, void 0, void 0, function () { var u, r, _b, _c; return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                t = t || [];
                u = [], r = 0;
                _d.label = 1;
            case 1:
                if (!(r < t.length)) return [3, 4];
                _c = (_b = u).push;
                return [4, e(t[r], r, t)];
            case 2:
                _c.apply(_b, [_d.sent()]);
                _d.label = 3;
            case 3:
                r++;
                return [3, 1];
            case 4: return [2, u];
        }
    }); });
}
var oe = { id: "gongzicp", name: "gongzicp", source: "https://www.gongzicp.com", type: "novel", locale: "zh-CN", nsfw: !1, version: 1, config: { DOMAIN: { title: "Tên miền", subtitle: "Đổi khi trang đổi tên miền", default: "https://www.gongzicp.com", values: ["https://www.gongzicp.com"], mode: "input", format: "text" } }, configDefaults: { DOMAIN: "https://www.gongzicp.com" }, itemType: 2, lnId: "kiritokmn.gongzicp", lnIcon: "", lnVersion: "1.0.1" }, Or = { home: function (t, e) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            return [2, (function (u, r, i, s, d, b, p, g, A, D, N, q, L, U, X, J) {
                    return __awaiter(this, void 0, void 0, function () { var F; return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                F = e("DOMAIN");
                                return [4, (function () {
                                        return __awaiter(this, void 0, void 0, function () { function G() {
                                            return __awaiter(this, void 0, void 0, function () { var a, n; return __generator(this, function (_b) {
                                                a = [];
                                                for (n in o.tabs)
                                                    a.push({ title: n, input: n, script: "browse.js" });
                                                return [2, s.success(a)];
                                            }); });
                                        } var T, o, h, m; return __generator(this, function (_b) {
                                            T = "https://www.gongzicp.com";
                                            try {
                                                F && (T = String(F).replace(/\/+$/, ""));
                                            }
                                            catch (a) { }
                                            o = { tabs: { "Mới cập nhật": "/[?page={p}]" }, search: "/tim-kiem?keyword={q}[&page={p}]", ch_list: "a[href*=chuong], a[href*=chap], a[href*=tap-], a[href*=episode]" }, h = { img: function (a) { if (!a)
                                                    return ""; for (var n = ["data-src", "data-lazy-src", "data-original", "data-lazyload", "data-cfsrc", "data-url", "src"], c = 0; c < n.length; c++) {
                                                    var l = a.attr(n[c]);
                                                    if (l && l.indexOf("data:image") !== 0 && !/dflazy|lazy\.|placeholder|blank\.(gif|png)/i.test(l))
                                                        return h.fix(l.trim());
                                                } var f = a.attr("data-srcset") || a.attr("srcset"); return f ? h.fix(f.split(",").pop().trim().split(" ")[0]) : ""; }, fix: function (a) { return a ? (a = String(a).trim(), a.indexOf("//") === 0 ? "https:" + a : a.indexOf("http") === 0 ? a : a.charAt(0) === "/" ? T + a : T + "/" + a) : ""; }, text: function (a, n) {
                                                    return __awaiter(this, void 0, void 0, function () { var c, l; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                c = 0;
                                                                _b.label = 1;
                                                            case 1:
                                                                if (!(c < n.length)) return [3, 4];
                                                                return [4, a.select(n[c]).text()];
                                                            case 2:
                                                                l = _b.sent();
                                                                if (l)
                                                                    return [2, l.trim()];
                                                                _b.label = 3;
                                                            case 3:
                                                                c++;
                                                                return [3, 1];
                                                            case 4: return [2, ""];
                                                        }
                                                    }); });
                                                }, get: function (a, n) {
                                                    return __awaiter(this, void 0, void 0, function () { var c, l, f; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                n = n || {};
                                                                c = { Referer: T + "/" };
                                                                if (n.headers)
                                                                    for (l in n.headers)
                                                                        c[l] = n.headers[l];
                                                                return [4, u(a, { method: n.method, headers: c, body: n.body })];
                                                            case 1:
                                                                f = _b.sent();
                                                                return [2, f];
                                                        }
                                                    }); });
                                                }, html: function (a, n) {
                                                    return __awaiter(this, void 0, void 0, function () { var c; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0: return [4, h.get(a, n)];
                                                            case 1:
                                                                c = _b.sent();
                                                                if (!c.ok)
                                                                    throw new Error("HTTP " + c.status + " " + a);
                                                                return [4, c.html(n && n.charset)];
                                                            case 2: return [2, _b.sent()];
                                                        }
                                                    }); });
                                                }, json: function (a, n) {
                                                    return __awaiter(this, void 0, void 0, function () { var c; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0: return [4, h.get(a, n)];
                                                            case 1:
                                                                c = _b.sent();
                                                                if (!c.ok)
                                                                    throw new Error("HTTP " + c.status + " " + a);
                                                                return [4, c.json()];
                                                            case 2: return [2, _b.sent()];
                                                        }
                                                    }); });
                                                }, page: function (a) { var n = parseInt(a || "1", 10); return isNaN(n) || n < 1 ? 1 : n; }, next: function (a, n) { return a ? String(h.page(n) + 1) : ""; }, isUrl: function (a) { return /^(https?:)?\/\//.test(a || "") || (a || "").charAt(0) === "/"; }, enc: function (a) { return encodeURIComponent(a || ""); }, cleanContent: function (a) {
                                                    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                a.select("script, style, ins, iframe, noscript, .ads, .ad, [class*=ads-], [id*=ads], .adsbygoogle, button, form").remove();
                                                                return [4, a.html()];
                                                            case 1: return [2, (_b.sent()).replace(/&nbsp;/g, " ").replace(/(<br\s*\/?>\s*){3,}/gi, "<br><br>")];
                                                        }
                                                    }); });
                                                }, ongoing: function (a) { return !/(hoàn thành|hoàn tất|full|completed|完结|完本|已完结|finished|end)/i.test(a || ""); } }, m = { pick: function (a, n) {
                                                    return __awaiter(this, void 0, void 0, function () { var c, l, f, x, v, S, w, E, _b, _c; return __generator(this, function (_d) {
                                                        switch (_d.label) {
                                                            case 0:
                                                                if (!n || !a)
                                                                    return [2, ""];
                                                                c = String(n).split(" || "), l = 0;
                                                                _d.label = 1;
                                                            case 1:
                                                                if (!(l < c.length)) return [3, 9];
                                                                f = c[l], x = "text", v = f.lastIndexOf("@");
                                                                v > 0 && !/\[[^\]]*@/.test(f.slice(v)) && (x = f.slice(v + 1), f = f.slice(0, v));
                                                                S = f === ":self" ? null : a.select(f), w = f === ":self" ? a : S.size() ? S.first() : null;
                                                                if (!w) return [3, 8];
                                                                if (!(x === "text")) return [3, 3];
                                                                return [4, w.text()];
                                                            case 2:
                                                                _b = _d.sent();
                                                                return [3, 7];
                                                            case 3:
                                                                if (!(x === "html")) return [3, 5];
                                                                return [4, w.html()];
                                                            case 4:
                                                                _c = _d.sent();
                                                                return [3, 6];
                                                            case 5:
                                                                _c = x === "img" ? h.img(w.is("img") ? w : w.select("img").first()) : x === "own" ? w.ownText() : w.attr(x);
                                                                _d.label = 6;
                                                            case 6:
                                                                _b = _c;
                                                                _d.label = 7;
                                                            case 7:
                                                                E = _b;
                                                                if (E)
                                                                    return [2, String(E).trim()];
                                                                _d.label = 8;
                                                            case 8:
                                                                l++;
                                                                return [3, 1];
                                                            case 9: return [2, ""];
                                                        }
                                                    }); });
                                                }, url: function (a, n, c) { var l = h.page(n), f = String(a); return f = f.replace(/\[([^\]]*)\]/g, function (x, v) { return l > 1 ? v : ""; }), f = f.replace(/\{p\}/g, String(l)).replace(/\{p0\}/g, String(l - 1)).replace(/\{q\}/g, h.enc(c || "")).replace(/\{base\}/g, T), h.fix(f); }, items: function (a) {
                                                    return __awaiter(this, void 0, void 0, function () {
                                                        var n, c, l, f, x, v, S, _b, _c, _d;
                                                        var _f;
                                                        return __generator(this, function (_g) {
                                                            switch (_g.label) {
                                                                case 0:
                                                                    n = a.select(o.item), c = [], l = {}, f = 0;
                                                                    _g.label = 1;
                                                                case 1:
                                                                    if (!(f < n.size())) return [3, 9];
                                                                    return [4, n.get(f)];
                                                                case 2:
                                                                    x = _g.sent();
                                                                    return [4, m.pick(x, o.link || "a@href")];
                                                                case 3:
                                                                    v = _g.sent();
                                                                    if (!!(!v || l[v] || /^javascript|#$/.test(v))) return [3, 8];
                                                                    return [4, m.pick(x, o.title || "h3 || h2 || a@title || img@alt")];
                                                                case 4:
                                                                    S = _g.sent();
                                                                    _b = S;
                                                                    if (!_b) return [3, 7];
                                                                    l[v] = 1;
                                                                    _d = (_c = c).push;
                                                                    _f = { name: S, link: h.fix(v) };
                                                                    return [4, m.pick(x, o.cover || "img@img")];
                                                                case 5:
                                                                    _f.cover = _g.sent();
                                                                    return [4, m.pick(x, o.desc || "")];
                                                                case 6:
                                                                    _b = (_d.apply(_c, [(_f.description = _g.sent(), _f.host = T, _f)]));
                                                                    _g.label = 7;
                                                                case 7:
                                                                    _b;
                                                                    _g.label = 8;
                                                                case 8:
                                                                    f++;
                                                                    return [3, 1];
                                                                case 9: return [2, c];
                                                            }
                                                        });
                                                    });
                                                }, listPage: function (a, n, c) {
                                                    return __awaiter(this, void 0, void 0, function () { var l, f, x; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0: return [4, h.html(m.url(a, n, c), o.req)];
                                                            case 1:
                                                                l = _b.sent();
                                                                return [4, m.items(l)];
                                                            case 2:
                                                                f = _b.sent(), x = o.next ? l.select(o.next).size() > 0 : f.length >= (o.pageSize || 10);
                                                                return [2, s.success(f, h.next(x && f.length > 0, n))];
                                                        }
                                                    }); });
                                                }, browse: function (a, n) {
                                                    return __awaiter(this, void 0, void 0, function () { var c; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                c = o.tabs && o.tabs[a] || a;
                                                                return [4, m.listPage(c, n, "")];
                                                            case 1: return [2, _b.sent()];
                                                        }
                                                    }); });
                                                }, search: function (a, n) {
                                                    return __awaiter(this, void 0, void 0, function () { var c; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                if (!h.isUrl(a)) return [3, 2];
                                                                c = h.fix(a);
                                                                return [4, m.listPage(c + (c.indexOf("?") > 0 ? "&" : "?") + (o.pageParam || "page") + "={p}", n, "")];
                                                            case 1: return [2, _b.sent()];
                                                            case 2: return [4, m.listPage(o.search, n, a)];
                                                            case 3: return [2, _b.sent()];
                                                        }
                                                    }); });
                                                }, genre: function () {
                                                    return __awaiter(this, void 0, void 0, function () { var a, n; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                if (!o.genre)
                                                                    return [2, s.success([])];
                                                                return [4, h.html(h.fix(o.genrePage || "/"))];
                                                            case 1:
                                                                a = _b.sent();
                                                                return [4, j(a.select(o.genre), function (c) {
                                                                        return __awaiter(this, void 0, void 0, function () {
                                                                            var _b;
                                                                            return __generator(this, function (_c) {
                                                                                switch (_c.label) {
                                                                                    case 0:
                                                                                        _b = {};
                                                                                        return [4, c.text()];
                                                                                    case 1: return [2, (_b.title = _c.sent(), _b.input = h.fix(c.attr("href")), _b.script = "search.js", _b)];
                                                                                }
                                                                            });
                                                                        });
                                                                    })];
                                                            case 2:
                                                                n = _b.sent();
                                                                return [2, s.success(n.filter(function (c) { return c.title; }))];
                                                        }
                                                    }); });
                                                }, detail: function (a) {
                                                    return __awaiter(this, void 0, void 0, function () {
                                                        var n, c, l, _b, _c, _d, _f, _g;
                                                        var _h;
                                                        return __generator(this, function (_j) {
                                                            switch (_j.label) {
                                                                case 0: return [4, h.html(a, o.req)];
                                                                case 1:
                                                                    n = _j.sent();
                                                                    if (!o.d_genres) return [3, 3];
                                                                    return [4, j(n.select(o.d_genres), function (f) {
                                                                            return __awaiter(this, void 0, void 0, function () {
                                                                                var _b;
                                                                                return __generator(this, function (_c) {
                                                                                    switch (_c.label) {
                                                                                        case 0:
                                                                                            _b = {};
                                                                                            return [4, f.text()];
                                                                                        case 1: return [2, (_b.title = _c.sent(), _b.input = h.fix(f.attr("href")), _b.script = "search.js", _b)];
                                                                                    }
                                                                                });
                                                                            });
                                                                        })];
                                                                case 2:
                                                                    _b = _j.sent();
                                                                    return [3, 4];
                                                                case 3:
                                                                    _b = [];
                                                                    _j.label = 4;
                                                                case 4:
                                                                    c = _b;
                                                                    return [4, m.pick(n, o.d_status)];
                                                                case 5:
                                                                    l = _j.sent();
                                                                    _d = (_c = s).success;
                                                                    _h = {};
                                                                    return [4, m.pick(n, o.d_title || "h1")];
                                                                case 6:
                                                                    _h.name = _j.sent();
                                                                    _g = (_f = h).fix;
                                                                    return [4, m.pick(n, o.d_cover || "meta[property=og:image]@content")];
                                                                case 7:
                                                                    _h.cover = _g.apply(_f, [_j.sent()]);
                                                                    return [4, m.pick(n, o.d_author)];
                                                                case 8:
                                                                    _h.author = _j.sent();
                                                                    return [4, m.pick(n, (o.d_desc || "meta[name=description]@content").replace(/$/, ""))];
                                                                case 9: return [2, _d.apply(_c, [(_h.description = _j.sent(), _h.detail = l ? "Tình trạng: " + l : "", _h.ongoing = h.ongoing(l), _h.genres = c, _h.host = T, _h)])];
                                                            }
                                                        });
                                                    });
                                                }, toc: function (a) {
                                                    return __awaiter(this, void 0, void 0, function () {
                                                        var n, c, l, f, x, _b, v, S, w, E, k, _c, _d, _f, _g, B, H;
                                                        var _h;
                                                        return __generator(this, function (_j) {
                                                            switch (_j.label) {
                                                                case 0:
                                                                    if (o.single)
                                                                        return [2, s.success([{ name: o.single === !0 ? "Xem / Đọc" : o.single, url: a, host: T }])];
                                                                    n = [a], c = [], l = {};
                                                                    return [4, h.html(a, o.req)];
                                                                case 1:
                                                                    f = _j.sent();
                                                                    if (!o.ch_url) return [3, 5];
                                                                    return [4, m.pick(f, o.ch_url)];
                                                                case 2:
                                                                    x = _j.sent();
                                                                    _b = x;
                                                                    if (!_b) return [3, 4];
                                                                    return [4, h.html(h.fix(x), o.req)];
                                                                case 3:
                                                                    _b = (f = _j.sent());
                                                                    _j.label = 4;
                                                                case 4:
                                                                    _b;
                                                                    _j.label = 5;
                                                                case 5:
                                                                    v = 0;
                                                                    _j.label = 6;
                                                                case 6:
                                                                    if (!(v < (o.ch_maxPages || 60))) return [3, 18];
                                                                    S = f.select(o.ch_list), w = 0;
                                                                    _j.label = 7;
                                                                case 7:
                                                                    if (!(w < S.size())) return [3, 15];
                                                                    return [4, S.get(w)];
                                                                case 8:
                                                                    E = _j.sent(), k = E.attr("href") || E.attr("data-href");
                                                                    _c = !k || k === "#" || l[k];
                                                                    if (_c) return [3, 13];
                                                                    l[k] = 1;
                                                                    _f = (_d = c).push;
                                                                    _h = {};
                                                                    if (!o.ch_name) return [3, 10];
                                                                    return [4, m.pick(E, o.ch_name)];
                                                                case 9:
                                                                    _g = _j.sent();
                                                                    return [3, 12];
                                                                case 10: return [4, E.text()];
                                                                case 11:
                                                                    _g = _j.sent();
                                                                    _j.label = 12;
                                                                case 12:
                                                                    _c = (_f.apply(_d, [(_h.name = (_g) || E.attr("title"), _h.url = h.fix(k), _h.host = T, _h)]));
                                                                    _j.label = 13;
                                                                case 13:
                                                                    _c;
                                                                    _j.label = 14;
                                                                case 14:
                                                                    w++;
                                                                    return [3, 7];
                                                                case 15:
                                                                    B = o.ch_next ? f.select(o.ch_next).first() : null;
                                                                    if (!B || !B.attr("href"))
                                                                        return [3, 18];
                                                                    H = h.fix(B.attr("href"));
                                                                    if (n.indexOf(H) >= 0)
                                                                        return [3, 18];
                                                                    n.push(H);
                                                                    return [4, h.html(H, o.req)];
                                                                case 16:
                                                                    f = _j.sent();
                                                                    _j.label = 17;
                                                                case 17:
                                                                    v++;
                                                                    return [3, 6];
                                                                case 18: return [2, (o.ch_reverse && c.reverse(), s.success(c))];
                                                            }
                                                        });
                                                    });
                                                }, pages: function (a) {
                                                    return __awaiter(this, void 0, void 0, function () { var n, c, l, f, x, v, S, w, _b, _c, E, k; return __generator(this, function (_d) {
                                                        switch (_d.label) {
                                                            case 0:
                                                                n = [], c = [a], l = a, f = 0;
                                                                _d.label = 1;
                                                            case 1:
                                                                if (!(f < (o.pages_max || 40))) return [3, 8];
                                                                return [4, h.html(l, o.req)];
                                                            case 2:
                                                                x = _d.sent(), v = x.select(o.pages || ".page-chapter img, .reading-content img, .chapter-content img"), S = 0;
                                                                _d.label = 3;
                                                            case 3:
                                                                if (!(S < v.size())) return [3, 6];
                                                                _c = (_b = h).img;
                                                                return [4, v.get(S)];
                                                            case 4:
                                                                w = _c.apply(_b, [_d.sent()]);
                                                                w && n.indexOf(w) < 0 && n.push(w);
                                                                _d.label = 5;
                                                            case 5:
                                                                S++;
                                                                return [3, 3];
                                                            case 6:
                                                                if (!o.pages_next)
                                                                    return [3, 8];
                                                                E = x.select(o.pages_next).first();
                                                                if (!E)
                                                                    return [3, 8];
                                                                k = h.fix(E.attr("href"));
                                                                if (!k || c.indexOf(k) >= 0)
                                                                    return [3, 8];
                                                                c.push(k), l = k;
                                                                _d.label = 7;
                                                            case 7:
                                                                f++;
                                                                return [3, 1];
                                                            case 8: return [2, s.success(n)];
                                                        }
                                                    }); });
                                                }, text: function (a) {
                                                    return __awaiter(this, void 0, void 0, function () { var n, c, _b, _c, _d, _f; return __generator(this, function (_g) {
                                                        switch (_g.label) {
                                                            case 0: return [4, h.html(a, o.req)];
                                                            case 1:
                                                                n = _g.sent(), c = n.select(o.content || "#chapter-c, .chapter-c, #chapter-content, .chapter-content, .reading-content").first();
                                                                if (!c) return [3, 4];
                                                                _d = (_c = s).success;
                                                                return [4, h.cleanContent(c)];
                                                            case 2:
                                                                _f = [_g.sent()];
                                                                return [4, m.pick(n, o.c_title || "h1 || h2")];
                                                            case 3:
                                                                _b = _d.apply(_c, _f.concat([_g.sent()]));
                                                                return [3, 5];
                                                            case 4:
                                                                _b = s.error("Không tìm thấy nội dung");
                                                                _g.label = 5;
                                                            case 5: return [2, _b];
                                                        }
                                                    }); });
                                                }, servers: function (a) {
                                                    return __awaiter(this, void 0, void 0, function () { var n, c; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                if (!o.servers)
                                                                    return [2, s.success([{ title: "Server", data: a }])];
                                                                return [4, h.html(a, o.req)];
                                                            case 1:
                                                                n = _b.sent();
                                                                return [4, j(n.select(o.servers), function (l) {
                                                                        return __awaiter(this, void 0, void 0, function () {
                                                                            var f;
                                                                            var _b;
                                                                            return __generator(this, function (_c) {
                                                                                switch (_c.label) {
                                                                                    case 0: return [4, m.pick(l, o.server_data || ":self@data-link || :self@data-src || :self@href")];
                                                                                    case 1:
                                                                                        f = _c.sent();
                                                                                        _b = {};
                                                                                        return [4, l.text()];
                                                                                    case 2: return [2, (_b.title = (_c.sent()) || "Server", _b.data = h.fix(f), _b)];
                                                                                }
                                                                            });
                                                                        });
                                                                    })];
                                                            case 2:
                                                                c = (_b.sent()).filter(function (l) { return l.data; });
                                                                return [2, s.success(c.length ? c : [{ title: "Server", data: a }])];
                                                        }
                                                    }); });
                                                }, sniff: function (a) { a = String(a || "").replace(/\\\//g, "/"); var n = a.match(/https?:[^"'\s<>\\]+?\.m3u8[^"'\s<>\\]*/i) || a.match(/https?:[^"'\s<>\\]+?\.mp4[^"'\s<>\\]*/i); return n ? n[0] : ""; }, track: function (a, n) {
                                                    return __awaiter(this, void 0, void 0, function () { var c, l, f, x, v, S; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                if (n = n || 0, /\.(m3u8|mp4)(\?|$)/i.test(a))
                                                                    return [2, s.success({ type: "native", data: a, headers: { Referer: T + "/" } })];
                                                                return [4, h.get(a)];
                                                            case 1:
                                                                c = _b.sent();
                                                                return [4, c.text()];
                                                            case 2:
                                                                l = _b.sent(), f = m.sniff(l);
                                                                if (f)
                                                                    return [2, s.success({ type: "native", data: f, headers: { Referer: n ? a : T + "/" } })];
                                                                x = i.parse(l, a), v = x.select(o.iframe || "iframe[src], iframe[data-src]").first();
                                                                if (!(v && n < 2)) return [3, 4];
                                                                S = h.fix(v.attr("src") || v.attr("data-src"));
                                                                if (!S) return [3, 4];
                                                                return [4, m.track(S, n + 1)];
                                                            case 3: return [2, _b.sent()];
                                                            case 4: return [2, s.success({ type: "webview", data: a })];
                                                        }
                                                    }); });
                                                } };
                                            return [2, typeof G == "function" ? G : void 0];
                                        }); });
                                    })()];
                            case 1: return [2, _b.sent()];
                        }
                    }); });
                })(t.fetch, t.Http, t.Html, t.Response, t.localStorage, t.cacheStorage, t.localConfig, t.localCookie, t.sleep, t.Log, t.console, t.log, t.UserAgent, t.Engine, t.Graphics, t.Script)];
        }); });
    }, search: function (t, e) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            return [2, (function (u, r, i, s, d, b, p, g, A, D, N, q, L, U, X, J) {
                    return __awaiter(this, void 0, void 0, function () { var F; return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                F = e("DOMAIN");
                                return [4, (function () {
                                        return __awaiter(this, void 0, void 0, function () { function G(a, n) {
                                            return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                                                switch (_b.label) {
                                                    case 0: return [4, m.search(a, n)];
                                                    case 1: return [2, _b.sent()];
                                                }
                                            }); });
                                        } var T, o, h, m; return __generator(this, function (_b) {
                                            T = "https://www.gongzicp.com";
                                            try {
                                                F && (T = String(F).replace(/\/+$/, ""));
                                            }
                                            catch (a) { }
                                            o = { tabs: { "Mới cập nhật": "/[?page={p}]" }, search: "/tim-kiem?keyword={q}[&page={p}]", ch_list: "a[href*=chuong], a[href*=chap], a[href*=tap-], a[href*=episode]" }, h = { img: function (a) { if (!a)
                                                    return ""; for (var n = ["data-src", "data-lazy-src", "data-original", "data-lazyload", "data-cfsrc", "data-url", "src"], c = 0; c < n.length; c++) {
                                                    var l = a.attr(n[c]);
                                                    if (l && l.indexOf("data:image") !== 0 && !/dflazy|lazy\.|placeholder|blank\.(gif|png)/i.test(l))
                                                        return h.fix(l.trim());
                                                } var f = a.attr("data-srcset") || a.attr("srcset"); return f ? h.fix(f.split(",").pop().trim().split(" ")[0]) : ""; }, fix: function (a) { return a ? (a = String(a).trim(), a.indexOf("//") === 0 ? "https:" + a : a.indexOf("http") === 0 ? a : a.charAt(0) === "/" ? T + a : T + "/" + a) : ""; }, text: function (a, n) {
                                                    return __awaiter(this, void 0, void 0, function () { var c, l; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                c = 0;
                                                                _b.label = 1;
                                                            case 1:
                                                                if (!(c < n.length)) return [3, 4];
                                                                return [4, a.select(n[c]).text()];
                                                            case 2:
                                                                l = _b.sent();
                                                                if (l)
                                                                    return [2, l.trim()];
                                                                _b.label = 3;
                                                            case 3:
                                                                c++;
                                                                return [3, 1];
                                                            case 4: return [2, ""];
                                                        }
                                                    }); });
                                                }, get: function (a, n) {
                                                    return __awaiter(this, void 0, void 0, function () { var c, l, f; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                n = n || {};
                                                                c = { Referer: T + "/" };
                                                                if (n.headers)
                                                                    for (l in n.headers)
                                                                        c[l] = n.headers[l];
                                                                return [4, u(a, { method: n.method, headers: c, body: n.body })];
                                                            case 1:
                                                                f = _b.sent();
                                                                return [2, f];
                                                        }
                                                    }); });
                                                }, html: function (a, n) {
                                                    return __awaiter(this, void 0, void 0, function () { var c; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0: return [4, h.get(a, n)];
                                                            case 1:
                                                                c = _b.sent();
                                                                if (!c.ok)
                                                                    throw new Error("HTTP " + c.status + " " + a);
                                                                return [4, c.html(n && n.charset)];
                                                            case 2: return [2, _b.sent()];
                                                        }
                                                    }); });
                                                }, json: function (a, n) {
                                                    return __awaiter(this, void 0, void 0, function () { var c; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0: return [4, h.get(a, n)];
                                                            case 1:
                                                                c = _b.sent();
                                                                if (!c.ok)
                                                                    throw new Error("HTTP " + c.status + " " + a);
                                                                return [4, c.json()];
                                                            case 2: return [2, _b.sent()];
                                                        }
                                                    }); });
                                                }, page: function (a) { var n = parseInt(a || "1", 10); return isNaN(n) || n < 1 ? 1 : n; }, next: function (a, n) { return a ? String(h.page(n) + 1) : ""; }, isUrl: function (a) { return /^(https?:)?\/\//.test(a || "") || (a || "").charAt(0) === "/"; }, enc: function (a) { return encodeURIComponent(a || ""); }, cleanContent: function (a) {
                                                    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                a.select("script, style, ins, iframe, noscript, .ads, .ad, [class*=ads-], [id*=ads], .adsbygoogle, button, form").remove();
                                                                return [4, a.html()];
                                                            case 1: return [2, (_b.sent()).replace(/&nbsp;/g, " ").replace(/(<br\s*\/?>\s*){3,}/gi, "<br><br>")];
                                                        }
                                                    }); });
                                                }, ongoing: function (a) { return !/(hoàn thành|hoàn tất|full|completed|完结|完本|已完结|finished|end)/i.test(a || ""); } }, m = { pick: function (a, n) {
                                                    return __awaiter(this, void 0, void 0, function () { var c, l, f, x, v, S, w, E, _b, _c; return __generator(this, function (_d) {
                                                        switch (_d.label) {
                                                            case 0:
                                                                if (!n || !a)
                                                                    return [2, ""];
                                                                c = String(n).split(" || "), l = 0;
                                                                _d.label = 1;
                                                            case 1:
                                                                if (!(l < c.length)) return [3, 9];
                                                                f = c[l], x = "text", v = f.lastIndexOf("@");
                                                                v > 0 && !/\[[^\]]*@/.test(f.slice(v)) && (x = f.slice(v + 1), f = f.slice(0, v));
                                                                S = f === ":self" ? null : a.select(f), w = f === ":self" ? a : S.size() ? S.first() : null;
                                                                if (!w) return [3, 8];
                                                                if (!(x === "text")) return [3, 3];
                                                                return [4, w.text()];
                                                            case 2:
                                                                _b = _d.sent();
                                                                return [3, 7];
                                                            case 3:
                                                                if (!(x === "html")) return [3, 5];
                                                                return [4, w.html()];
                                                            case 4:
                                                                _c = _d.sent();
                                                                return [3, 6];
                                                            case 5:
                                                                _c = x === "img" ? h.img(w.is("img") ? w : w.select("img").first()) : x === "own" ? w.ownText() : w.attr(x);
                                                                _d.label = 6;
                                                            case 6:
                                                                _b = _c;
                                                                _d.label = 7;
                                                            case 7:
                                                                E = _b;
                                                                if (E)
                                                                    return [2, String(E).trim()];
                                                                _d.label = 8;
                                                            case 8:
                                                                l++;
                                                                return [3, 1];
                                                            case 9: return [2, ""];
                                                        }
                                                    }); });
                                                }, url: function (a, n, c) { var l = h.page(n), f = String(a); return f = f.replace(/\[([^\]]*)\]/g, function (x, v) { return l > 1 ? v : ""; }), f = f.replace(/\{p\}/g, String(l)).replace(/\{p0\}/g, String(l - 1)).replace(/\{q\}/g, h.enc(c || "")).replace(/\{base\}/g, T), h.fix(f); }, items: function (a) {
                                                    return __awaiter(this, void 0, void 0, function () {
                                                        var n, c, l, f, x, v, S, _b, _c, _d;
                                                        var _f;
                                                        return __generator(this, function (_g) {
                                                            switch (_g.label) {
                                                                case 0:
                                                                    n = a.select(o.item), c = [], l = {}, f = 0;
                                                                    _g.label = 1;
                                                                case 1:
                                                                    if (!(f < n.size())) return [3, 9];
                                                                    return [4, n.get(f)];
                                                                case 2:
                                                                    x = _g.sent();
                                                                    return [4, m.pick(x, o.link || "a@href")];
                                                                case 3:
                                                                    v = _g.sent();
                                                                    if (!!(!v || l[v] || /^javascript|#$/.test(v))) return [3, 8];
                                                                    return [4, m.pick(x, o.title || "h3 || h2 || a@title || img@alt")];
                                                                case 4:
                                                                    S = _g.sent();
                                                                    _b = S;
                                                                    if (!_b) return [3, 7];
                                                                    l[v] = 1;
                                                                    _d = (_c = c).push;
                                                                    _f = { name: S, link: h.fix(v) };
                                                                    return [4, m.pick(x, o.cover || "img@img")];
                                                                case 5:
                                                                    _f.cover = _g.sent();
                                                                    return [4, m.pick(x, o.desc || "")];
                                                                case 6:
                                                                    _b = (_d.apply(_c, [(_f.description = _g.sent(), _f.host = T, _f)]));
                                                                    _g.label = 7;
                                                                case 7:
                                                                    _b;
                                                                    _g.label = 8;
                                                                case 8:
                                                                    f++;
                                                                    return [3, 1];
                                                                case 9: return [2, c];
                                                            }
                                                        });
                                                    });
                                                }, listPage: function (a, n, c) {
                                                    return __awaiter(this, void 0, void 0, function () { var l, f, x; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0: return [4, h.html(m.url(a, n, c), o.req)];
                                                            case 1:
                                                                l = _b.sent();
                                                                return [4, m.items(l)];
                                                            case 2:
                                                                f = _b.sent(), x = o.next ? l.select(o.next).size() > 0 : f.length >= (o.pageSize || 10);
                                                                return [2, s.success(f, h.next(x && f.length > 0, n))];
                                                        }
                                                    }); });
                                                }, browse: function (a, n) {
                                                    return __awaiter(this, void 0, void 0, function () { var c; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                c = o.tabs && o.tabs[a] || a;
                                                                return [4, m.listPage(c, n, "")];
                                                            case 1: return [2, _b.sent()];
                                                        }
                                                    }); });
                                                }, search: function (a, n) {
                                                    return __awaiter(this, void 0, void 0, function () { var c; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                if (!h.isUrl(a)) return [3, 2];
                                                                c = h.fix(a);
                                                                return [4, m.listPage(c + (c.indexOf("?") > 0 ? "&" : "?") + (o.pageParam || "page") + "={p}", n, "")];
                                                            case 1: return [2, _b.sent()];
                                                            case 2: return [4, m.listPage(o.search, n, a)];
                                                            case 3: return [2, _b.sent()];
                                                        }
                                                    }); });
                                                }, genre: function () {
                                                    return __awaiter(this, void 0, void 0, function () { var a, n; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                if (!o.genre)
                                                                    return [2, s.success([])];
                                                                return [4, h.html(h.fix(o.genrePage || "/"))];
                                                            case 1:
                                                                a = _b.sent();
                                                                return [4, j(a.select(o.genre), function (c) {
                                                                        return __awaiter(this, void 0, void 0, function () {
                                                                            var _b;
                                                                            return __generator(this, function (_c) {
                                                                                switch (_c.label) {
                                                                                    case 0:
                                                                                        _b = {};
                                                                                        return [4, c.text()];
                                                                                    case 1: return [2, (_b.title = _c.sent(), _b.input = h.fix(c.attr("href")), _b.script = "search.js", _b)];
                                                                                }
                                                                            });
                                                                        });
                                                                    })];
                                                            case 2:
                                                                n = _b.sent();
                                                                return [2, s.success(n.filter(function (c) { return c.title; }))];
                                                        }
                                                    }); });
                                                }, detail: function (a) {
                                                    return __awaiter(this, void 0, void 0, function () {
                                                        var n, c, l, _b, _c, _d, _f, _g;
                                                        var _h;
                                                        return __generator(this, function (_j) {
                                                            switch (_j.label) {
                                                                case 0: return [4, h.html(a, o.req)];
                                                                case 1:
                                                                    n = _j.sent();
                                                                    if (!o.d_genres) return [3, 3];
                                                                    return [4, j(n.select(o.d_genres), function (f) {
                                                                            return __awaiter(this, void 0, void 0, function () {
                                                                                var _b;
                                                                                return __generator(this, function (_c) {
                                                                                    switch (_c.label) {
                                                                                        case 0:
                                                                                            _b = {};
                                                                                            return [4, f.text()];
                                                                                        case 1: return [2, (_b.title = _c.sent(), _b.input = h.fix(f.attr("href")), _b.script = "search.js", _b)];
                                                                                    }
                                                                                });
                                                                            });
                                                                        })];
                                                                case 2:
                                                                    _b = _j.sent();
                                                                    return [3, 4];
                                                                case 3:
                                                                    _b = [];
                                                                    _j.label = 4;
                                                                case 4:
                                                                    c = _b;
                                                                    return [4, m.pick(n, o.d_status)];
                                                                case 5:
                                                                    l = _j.sent();
                                                                    _d = (_c = s).success;
                                                                    _h = {};
                                                                    return [4, m.pick(n, o.d_title || "h1")];
                                                                case 6:
                                                                    _h.name = _j.sent();
                                                                    _g = (_f = h).fix;
                                                                    return [4, m.pick(n, o.d_cover || "meta[property=og:image]@content")];
                                                                case 7:
                                                                    _h.cover = _g.apply(_f, [_j.sent()]);
                                                                    return [4, m.pick(n, o.d_author)];
                                                                case 8:
                                                                    _h.author = _j.sent();
                                                                    return [4, m.pick(n, (o.d_desc || "meta[name=description]@content").replace(/$/, ""))];
                                                                case 9: return [2, _d.apply(_c, [(_h.description = _j.sent(), _h.detail = l ? "Tình trạng: " + l : "", _h.ongoing = h.ongoing(l), _h.genres = c, _h.host = T, _h)])];
                                                            }
                                                        });
                                                    });
                                                }, toc: function (a) {
                                                    return __awaiter(this, void 0, void 0, function () {
                                                        var n, c, l, f, x, _b, v, S, w, E, k, _c, _d, _f, _g, B, H;
                                                        var _h;
                                                        return __generator(this, function (_j) {
                                                            switch (_j.label) {
                                                                case 0:
                                                                    if (o.single)
                                                                        return [2, s.success([{ name: o.single === !0 ? "Xem / Đọc" : o.single, url: a, host: T }])];
                                                                    n = [a], c = [], l = {};
                                                                    return [4, h.html(a, o.req)];
                                                                case 1:
                                                                    f = _j.sent();
                                                                    if (!o.ch_url) return [3, 5];
                                                                    return [4, m.pick(f, o.ch_url)];
                                                                case 2:
                                                                    x = _j.sent();
                                                                    _b = x;
                                                                    if (!_b) return [3, 4];
                                                                    return [4, h.html(h.fix(x), o.req)];
                                                                case 3:
                                                                    _b = (f = _j.sent());
                                                                    _j.label = 4;
                                                                case 4:
                                                                    _b;
                                                                    _j.label = 5;
                                                                case 5:
                                                                    v = 0;
                                                                    _j.label = 6;
                                                                case 6:
                                                                    if (!(v < (o.ch_maxPages || 60))) return [3, 18];
                                                                    S = f.select(o.ch_list), w = 0;
                                                                    _j.label = 7;
                                                                case 7:
                                                                    if (!(w < S.size())) return [3, 15];
                                                                    return [4, S.get(w)];
                                                                case 8:
                                                                    E = _j.sent(), k = E.attr("href") || E.attr("data-href");
                                                                    _c = !k || k === "#" || l[k];
                                                                    if (_c) return [3, 13];
                                                                    l[k] = 1;
                                                                    _f = (_d = c).push;
                                                                    _h = {};
                                                                    if (!o.ch_name) return [3, 10];
                                                                    return [4, m.pick(E, o.ch_name)];
                                                                case 9:
                                                                    _g = _j.sent();
                                                                    return [3, 12];
                                                                case 10: return [4, E.text()];
                                                                case 11:
                                                                    _g = _j.sent();
                                                                    _j.label = 12;
                                                                case 12:
                                                                    _c = (_f.apply(_d, [(_h.name = (_g) || E.attr("title"), _h.url = h.fix(k), _h.host = T, _h)]));
                                                                    _j.label = 13;
                                                                case 13:
                                                                    _c;
                                                                    _j.label = 14;
                                                                case 14:
                                                                    w++;
                                                                    return [3, 7];
                                                                case 15:
                                                                    B = o.ch_next ? f.select(o.ch_next).first() : null;
                                                                    if (!B || !B.attr("href"))
                                                                        return [3, 18];
                                                                    H = h.fix(B.attr("href"));
                                                                    if (n.indexOf(H) >= 0)
                                                                        return [3, 18];
                                                                    n.push(H);
                                                                    return [4, h.html(H, o.req)];
                                                                case 16:
                                                                    f = _j.sent();
                                                                    _j.label = 17;
                                                                case 17:
                                                                    v++;
                                                                    return [3, 6];
                                                                case 18: return [2, (o.ch_reverse && c.reverse(), s.success(c))];
                                                            }
                                                        });
                                                    });
                                                }, pages: function (a) {
                                                    return __awaiter(this, void 0, void 0, function () { var n, c, l, f, x, v, S, w, _b, _c, E, k; return __generator(this, function (_d) {
                                                        switch (_d.label) {
                                                            case 0:
                                                                n = [], c = [a], l = a, f = 0;
                                                                _d.label = 1;
                                                            case 1:
                                                                if (!(f < (o.pages_max || 40))) return [3, 8];
                                                                return [4, h.html(l, o.req)];
                                                            case 2:
                                                                x = _d.sent(), v = x.select(o.pages || ".page-chapter img, .reading-content img, .chapter-content img"), S = 0;
                                                                _d.label = 3;
                                                            case 3:
                                                                if (!(S < v.size())) return [3, 6];
                                                                _c = (_b = h).img;
                                                                return [4, v.get(S)];
                                                            case 4:
                                                                w = _c.apply(_b, [_d.sent()]);
                                                                w && n.indexOf(w) < 0 && n.push(w);
                                                                _d.label = 5;
                                                            case 5:
                                                                S++;
                                                                return [3, 3];
                                                            case 6:
                                                                if (!o.pages_next)
                                                                    return [3, 8];
                                                                E = x.select(o.pages_next).first();
                                                                if (!E)
                                                                    return [3, 8];
                                                                k = h.fix(E.attr("href"));
                                                                if (!k || c.indexOf(k) >= 0)
                                                                    return [3, 8];
                                                                c.push(k), l = k;
                                                                _d.label = 7;
                                                            case 7:
                                                                f++;
                                                                return [3, 1];
                                                            case 8: return [2, s.success(n)];
                                                        }
                                                    }); });
                                                }, text: function (a) {
                                                    return __awaiter(this, void 0, void 0, function () { var n, c, _b, _c, _d, _f; return __generator(this, function (_g) {
                                                        switch (_g.label) {
                                                            case 0: return [4, h.html(a, o.req)];
                                                            case 1:
                                                                n = _g.sent(), c = n.select(o.content || "#chapter-c, .chapter-c, #chapter-content, .chapter-content, .reading-content").first();
                                                                if (!c) return [3, 4];
                                                                _d = (_c = s).success;
                                                                return [4, h.cleanContent(c)];
                                                            case 2:
                                                                _f = [_g.sent()];
                                                                return [4, m.pick(n, o.c_title || "h1 || h2")];
                                                            case 3:
                                                                _b = _d.apply(_c, _f.concat([_g.sent()]));
                                                                return [3, 5];
                                                            case 4:
                                                                _b = s.error("Không tìm thấy nội dung");
                                                                _g.label = 5;
                                                            case 5: return [2, _b];
                                                        }
                                                    }); });
                                                }, servers: function (a) {
                                                    return __awaiter(this, void 0, void 0, function () { var n, c; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                if (!o.servers)
                                                                    return [2, s.success([{ title: "Server", data: a }])];
                                                                return [4, h.html(a, o.req)];
                                                            case 1:
                                                                n = _b.sent();
                                                                return [4, j(n.select(o.servers), function (l) {
                                                                        return __awaiter(this, void 0, void 0, function () {
                                                                            var f;
                                                                            var _b;
                                                                            return __generator(this, function (_c) {
                                                                                switch (_c.label) {
                                                                                    case 0: return [4, m.pick(l, o.server_data || ":self@data-link || :self@data-src || :self@href")];
                                                                                    case 1:
                                                                                        f = _c.sent();
                                                                                        _b = {};
                                                                                        return [4, l.text()];
                                                                                    case 2: return [2, (_b.title = (_c.sent()) || "Server", _b.data = h.fix(f), _b)];
                                                                                }
                                                                            });
                                                                        });
                                                                    })];
                                                            case 2:
                                                                c = (_b.sent()).filter(function (l) { return l.data; });
                                                                return [2, s.success(c.length ? c : [{ title: "Server", data: a }])];
                                                        }
                                                    }); });
                                                }, sniff: function (a) { a = String(a || "").replace(/\\\//g, "/"); var n = a.match(/https?:[^"'\s<>\\]+?\.m3u8[^"'\s<>\\]*/i) || a.match(/https?:[^"'\s<>\\]+?\.mp4[^"'\s<>\\]*/i); return n ? n[0] : ""; }, track: function (a, n) {
                                                    return __awaiter(this, void 0, void 0, function () { var c, l, f, x, v, S; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                if (n = n || 0, /\.(m3u8|mp4)(\?|$)/i.test(a))
                                                                    return [2, s.success({ type: "native", data: a, headers: { Referer: T + "/" } })];
                                                                return [4, h.get(a)];
                                                            case 1:
                                                                c = _b.sent();
                                                                return [4, c.text()];
                                                            case 2:
                                                                l = _b.sent(), f = m.sniff(l);
                                                                if (f)
                                                                    return [2, s.success({ type: "native", data: f, headers: { Referer: n ? a : T + "/" } })];
                                                                x = i.parse(l, a), v = x.select(o.iframe || "iframe[src], iframe[data-src]").first();
                                                                if (!(v && n < 2)) return [3, 4];
                                                                S = h.fix(v.attr("src") || v.attr("data-src"));
                                                                if (!S) return [3, 4];
                                                                return [4, m.track(S, n + 1)];
                                                            case 3: return [2, _b.sent()];
                                                            case 4: return [2, s.success({ type: "webview", data: a })];
                                                        }
                                                    }); });
                                                } };
                                            return [2, typeof G == "function" ? G : void 0];
                                        }); });
                                    })()];
                            case 1: return [2, _b.sent()];
                        }
                    }); });
                })(t.fetch, t.Http, t.Html, t.Response, t.localStorage, t.cacheStorage, t.localConfig, t.localCookie, t.sleep, t.Log, t.console, t.log, t.UserAgent, t.Engine, t.Graphics, t.Script)];
        }); });
    }, detail: function (t, e) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            return [2, (function (u, r, i, s, d, b, p, g, A, D, N, q, L, U, X, J) {
                    return __awaiter(this, void 0, void 0, function () { var F; return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                F = e("DOMAIN");
                                return [4, (function () {
                                        return __awaiter(this, void 0, void 0, function () { function G(a) {
                                            return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                                                switch (_b.label) {
                                                    case 0: return [4, m.detail(a)];
                                                    case 1: return [2, _b.sent()];
                                                }
                                            }); });
                                        } var T, o, h, m; return __generator(this, function (_b) {
                                            T = "https://www.gongzicp.com";
                                            try {
                                                F && (T = String(F).replace(/\/+$/, ""));
                                            }
                                            catch (a) { }
                                            o = { tabs: { "Mới cập nhật": "/[?page={p}]" }, search: "/tim-kiem?keyword={q}[&page={p}]", ch_list: "a[href*=chuong], a[href*=chap], a[href*=tap-], a[href*=episode]" }, h = { img: function (a) { if (!a)
                                                    return ""; for (var n = ["data-src", "data-lazy-src", "data-original", "data-lazyload", "data-cfsrc", "data-url", "src"], c = 0; c < n.length; c++) {
                                                    var l = a.attr(n[c]);
                                                    if (l && l.indexOf("data:image") !== 0 && !/dflazy|lazy\.|placeholder|blank\.(gif|png)/i.test(l))
                                                        return h.fix(l.trim());
                                                } var f = a.attr("data-srcset") || a.attr("srcset"); return f ? h.fix(f.split(",").pop().trim().split(" ")[0]) : ""; }, fix: function (a) { return a ? (a = String(a).trim(), a.indexOf("//") === 0 ? "https:" + a : a.indexOf("http") === 0 ? a : a.charAt(0) === "/" ? T + a : T + "/" + a) : ""; }, text: function (a, n) {
                                                    return __awaiter(this, void 0, void 0, function () { var c, l; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                c = 0;
                                                                _b.label = 1;
                                                            case 1:
                                                                if (!(c < n.length)) return [3, 4];
                                                                return [4, a.select(n[c]).text()];
                                                            case 2:
                                                                l = _b.sent();
                                                                if (l)
                                                                    return [2, l.trim()];
                                                                _b.label = 3;
                                                            case 3:
                                                                c++;
                                                                return [3, 1];
                                                            case 4: return [2, ""];
                                                        }
                                                    }); });
                                                }, get: function (a, n) {
                                                    return __awaiter(this, void 0, void 0, function () { var c, l, f; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                n = n || {};
                                                                c = { Referer: T + "/" };
                                                                if (n.headers)
                                                                    for (l in n.headers)
                                                                        c[l] = n.headers[l];
                                                                return [4, u(a, { method: n.method, headers: c, body: n.body })];
                                                            case 1:
                                                                f = _b.sent();
                                                                return [2, f];
                                                        }
                                                    }); });
                                                }, html: function (a, n) {
                                                    return __awaiter(this, void 0, void 0, function () { var c; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0: return [4, h.get(a, n)];
                                                            case 1:
                                                                c = _b.sent();
                                                                if (!c.ok)
                                                                    throw new Error("HTTP " + c.status + " " + a);
                                                                return [4, c.html(n && n.charset)];
                                                            case 2: return [2, _b.sent()];
                                                        }
                                                    }); });
                                                }, json: function (a, n) {
                                                    return __awaiter(this, void 0, void 0, function () { var c; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0: return [4, h.get(a, n)];
                                                            case 1:
                                                                c = _b.sent();
                                                                if (!c.ok)
                                                                    throw new Error("HTTP " + c.status + " " + a);
                                                                return [4, c.json()];
                                                            case 2: return [2, _b.sent()];
                                                        }
                                                    }); });
                                                }, page: function (a) { var n = parseInt(a || "1", 10); return isNaN(n) || n < 1 ? 1 : n; }, next: function (a, n) { return a ? String(h.page(n) + 1) : ""; }, isUrl: function (a) { return /^(https?:)?\/\//.test(a || "") || (a || "").charAt(0) === "/"; }, enc: function (a) { return encodeURIComponent(a || ""); }, cleanContent: function (a) {
                                                    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                a.select("script, style, ins, iframe, noscript, .ads, .ad, [class*=ads-], [id*=ads], .adsbygoogle, button, form").remove();
                                                                return [4, a.html()];
                                                            case 1: return [2, (_b.sent()).replace(/&nbsp;/g, " ").replace(/(<br\s*\/?>\s*){3,}/gi, "<br><br>")];
                                                        }
                                                    }); });
                                                }, ongoing: function (a) { return !/(hoàn thành|hoàn tất|full|completed|完结|完本|已完结|finished|end)/i.test(a || ""); } }, m = { pick: function (a, n) {
                                                    return __awaiter(this, void 0, void 0, function () { var c, l, f, x, v, S, w, E, _b, _c; return __generator(this, function (_d) {
                                                        switch (_d.label) {
                                                            case 0:
                                                                if (!n || !a)
                                                                    return [2, ""];
                                                                c = String(n).split(" || "), l = 0;
                                                                _d.label = 1;
                                                            case 1:
                                                                if (!(l < c.length)) return [3, 9];
                                                                f = c[l], x = "text", v = f.lastIndexOf("@");
                                                                v > 0 && !/\[[^\]]*@/.test(f.slice(v)) && (x = f.slice(v + 1), f = f.slice(0, v));
                                                                S = f === ":self" ? null : a.select(f), w = f === ":self" ? a : S.size() ? S.first() : null;
                                                                if (!w) return [3, 8];
                                                                if (!(x === "text")) return [3, 3];
                                                                return [4, w.text()];
                                                            case 2:
                                                                _b = _d.sent();
                                                                return [3, 7];
                                                            case 3:
                                                                if (!(x === "html")) return [3, 5];
                                                                return [4, w.html()];
                                                            case 4:
                                                                _c = _d.sent();
                                                                return [3, 6];
                                                            case 5:
                                                                _c = x === "img" ? h.img(w.is("img") ? w : w.select("img").first()) : x === "own" ? w.ownText() : w.attr(x);
                                                                _d.label = 6;
                                                            case 6:
                                                                _b = _c;
                                                                _d.label = 7;
                                                            case 7:
                                                                E = _b;
                                                                if (E)
                                                                    return [2, String(E).trim()];
                                                                _d.label = 8;
                                                            case 8:
                                                                l++;
                                                                return [3, 1];
                                                            case 9: return [2, ""];
                                                        }
                                                    }); });
                                                }, url: function (a, n, c) { var l = h.page(n), f = String(a); return f = f.replace(/\[([^\]]*)\]/g, function (x, v) { return l > 1 ? v : ""; }), f = f.replace(/\{p\}/g, String(l)).replace(/\{p0\}/g, String(l - 1)).replace(/\{q\}/g, h.enc(c || "")).replace(/\{base\}/g, T), h.fix(f); }, items: function (a) {
                                                    return __awaiter(this, void 0, void 0, function () {
                                                        var n, c, l, f, x, v, S, _b, _c, _d;
                                                        var _f;
                                                        return __generator(this, function (_g) {
                                                            switch (_g.label) {
                                                                case 0:
                                                                    n = a.select(o.item), c = [], l = {}, f = 0;
                                                                    _g.label = 1;
                                                                case 1:
                                                                    if (!(f < n.size())) return [3, 9];
                                                                    return [4, n.get(f)];
                                                                case 2:
                                                                    x = _g.sent();
                                                                    return [4, m.pick(x, o.link || "a@href")];
                                                                case 3:
                                                                    v = _g.sent();
                                                                    if (!!(!v || l[v] || /^javascript|#$/.test(v))) return [3, 8];
                                                                    return [4, m.pick(x, o.title || "h3 || h2 || a@title || img@alt")];
                                                                case 4:
                                                                    S = _g.sent();
                                                                    _b = S;
                                                                    if (!_b) return [3, 7];
                                                                    l[v] = 1;
                                                                    _d = (_c = c).push;
                                                                    _f = { name: S, link: h.fix(v) };
                                                                    return [4, m.pick(x, o.cover || "img@img")];
                                                                case 5:
                                                                    _f.cover = _g.sent();
                                                                    return [4, m.pick(x, o.desc || "")];
                                                                case 6:
                                                                    _b = (_d.apply(_c, [(_f.description = _g.sent(), _f.host = T, _f)]));
                                                                    _g.label = 7;
                                                                case 7:
                                                                    _b;
                                                                    _g.label = 8;
                                                                case 8:
                                                                    f++;
                                                                    return [3, 1];
                                                                case 9: return [2, c];
                                                            }
                                                        });
                                                    });
                                                }, listPage: function (a, n, c) {
                                                    return __awaiter(this, void 0, void 0, function () { var l, f, x; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0: return [4, h.html(m.url(a, n, c), o.req)];
                                                            case 1:
                                                                l = _b.sent();
                                                                return [4, m.items(l)];
                                                            case 2:
                                                                f = _b.sent(), x = o.next ? l.select(o.next).size() > 0 : f.length >= (o.pageSize || 10);
                                                                return [2, s.success(f, h.next(x && f.length > 0, n))];
                                                        }
                                                    }); });
                                                }, browse: function (a, n) {
                                                    return __awaiter(this, void 0, void 0, function () { var c; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                c = o.tabs && o.tabs[a] || a;
                                                                return [4, m.listPage(c, n, "")];
                                                            case 1: return [2, _b.sent()];
                                                        }
                                                    }); });
                                                }, search: function (a, n) {
                                                    return __awaiter(this, void 0, void 0, function () { var c; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                if (!h.isUrl(a)) return [3, 2];
                                                                c = h.fix(a);
                                                                return [4, m.listPage(c + (c.indexOf("?") > 0 ? "&" : "?") + (o.pageParam || "page") + "={p}", n, "")];
                                                            case 1: return [2, _b.sent()];
                                                            case 2: return [4, m.listPage(o.search, n, a)];
                                                            case 3: return [2, _b.sent()];
                                                        }
                                                    }); });
                                                }, genre: function () {
                                                    return __awaiter(this, void 0, void 0, function () { var a, n; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                if (!o.genre)
                                                                    return [2, s.success([])];
                                                                return [4, h.html(h.fix(o.genrePage || "/"))];
                                                            case 1:
                                                                a = _b.sent();
                                                                return [4, j(a.select(o.genre), function (c) {
                                                                        return __awaiter(this, void 0, void 0, function () {
                                                                            var _b;
                                                                            return __generator(this, function (_c) {
                                                                                switch (_c.label) {
                                                                                    case 0:
                                                                                        _b = {};
                                                                                        return [4, c.text()];
                                                                                    case 1: return [2, (_b.title = _c.sent(), _b.input = h.fix(c.attr("href")), _b.script = "search.js", _b)];
                                                                                }
                                                                            });
                                                                        });
                                                                    })];
                                                            case 2:
                                                                n = _b.sent();
                                                                return [2, s.success(n.filter(function (c) { return c.title; }))];
                                                        }
                                                    }); });
                                                }, detail: function (a) {
                                                    return __awaiter(this, void 0, void 0, function () {
                                                        var n, c, l, _b, _c, _d, _f, _g;
                                                        var _h;
                                                        return __generator(this, function (_j) {
                                                            switch (_j.label) {
                                                                case 0: return [4, h.html(a, o.req)];
                                                                case 1:
                                                                    n = _j.sent();
                                                                    if (!o.d_genres) return [3, 3];
                                                                    return [4, j(n.select(o.d_genres), function (f) {
                                                                            return __awaiter(this, void 0, void 0, function () {
                                                                                var _b;
                                                                                return __generator(this, function (_c) {
                                                                                    switch (_c.label) {
                                                                                        case 0:
                                                                                            _b = {};
                                                                                            return [4, f.text()];
                                                                                        case 1: return [2, (_b.title = _c.sent(), _b.input = h.fix(f.attr("href")), _b.script = "search.js", _b)];
                                                                                    }
                                                                                });
                                                                            });
                                                                        })];
                                                                case 2:
                                                                    _b = _j.sent();
                                                                    return [3, 4];
                                                                case 3:
                                                                    _b = [];
                                                                    _j.label = 4;
                                                                case 4:
                                                                    c = _b;
                                                                    return [4, m.pick(n, o.d_status)];
                                                                case 5:
                                                                    l = _j.sent();
                                                                    _d = (_c = s).success;
                                                                    _h = {};
                                                                    return [4, m.pick(n, o.d_title || "h1")];
                                                                case 6:
                                                                    _h.name = _j.sent();
                                                                    _g = (_f = h).fix;
                                                                    return [4, m.pick(n, o.d_cover || "meta[property=og:image]@content")];
                                                                case 7:
                                                                    _h.cover = _g.apply(_f, [_j.sent()]);
                                                                    return [4, m.pick(n, o.d_author)];
                                                                case 8:
                                                                    _h.author = _j.sent();
                                                                    return [4, m.pick(n, (o.d_desc || "meta[name=description]@content").replace(/$/, ""))];
                                                                case 9: return [2, _d.apply(_c, [(_h.description = _j.sent(), _h.detail = l ? "Tình trạng: " + l : "", _h.ongoing = h.ongoing(l), _h.genres = c, _h.host = T, _h)])];
                                                            }
                                                        });
                                                    });
                                                }, toc: function (a) {
                                                    return __awaiter(this, void 0, void 0, function () {
                                                        var n, c, l, f, x, _b, v, S, w, E, k, _c, _d, _f, _g, B, H;
                                                        var _h;
                                                        return __generator(this, function (_j) {
                                                            switch (_j.label) {
                                                                case 0:
                                                                    if (o.single)
                                                                        return [2, s.success([{ name: o.single === !0 ? "Xem / Đọc" : o.single, url: a, host: T }])];
                                                                    n = [a], c = [], l = {};
                                                                    return [4, h.html(a, o.req)];
                                                                case 1:
                                                                    f = _j.sent();
                                                                    if (!o.ch_url) return [3, 5];
                                                                    return [4, m.pick(f, o.ch_url)];
                                                                case 2:
                                                                    x = _j.sent();
                                                                    _b = x;
                                                                    if (!_b) return [3, 4];
                                                                    return [4, h.html(h.fix(x), o.req)];
                                                                case 3:
                                                                    _b = (f = _j.sent());
                                                                    _j.label = 4;
                                                                case 4:
                                                                    _b;
                                                                    _j.label = 5;
                                                                case 5:
                                                                    v = 0;
                                                                    _j.label = 6;
                                                                case 6:
                                                                    if (!(v < (o.ch_maxPages || 60))) return [3, 18];
                                                                    S = f.select(o.ch_list), w = 0;
                                                                    _j.label = 7;
                                                                case 7:
                                                                    if (!(w < S.size())) return [3, 15];
                                                                    return [4, S.get(w)];
                                                                case 8:
                                                                    E = _j.sent(), k = E.attr("href") || E.attr("data-href");
                                                                    _c = !k || k === "#" || l[k];
                                                                    if (_c) return [3, 13];
                                                                    l[k] = 1;
                                                                    _f = (_d = c).push;
                                                                    _h = {};
                                                                    if (!o.ch_name) return [3, 10];
                                                                    return [4, m.pick(E, o.ch_name)];
                                                                case 9:
                                                                    _g = _j.sent();
                                                                    return [3, 12];
                                                                case 10: return [4, E.text()];
                                                                case 11:
                                                                    _g = _j.sent();
                                                                    _j.label = 12;
                                                                case 12:
                                                                    _c = (_f.apply(_d, [(_h.name = (_g) || E.attr("title"), _h.url = h.fix(k), _h.host = T, _h)]));
                                                                    _j.label = 13;
                                                                case 13:
                                                                    _c;
                                                                    _j.label = 14;
                                                                case 14:
                                                                    w++;
                                                                    return [3, 7];
                                                                case 15:
                                                                    B = o.ch_next ? f.select(o.ch_next).first() : null;
                                                                    if (!B || !B.attr("href"))
                                                                        return [3, 18];
                                                                    H = h.fix(B.attr("href"));
                                                                    if (n.indexOf(H) >= 0)
                                                                        return [3, 18];
                                                                    n.push(H);
                                                                    return [4, h.html(H, o.req)];
                                                                case 16:
                                                                    f = _j.sent();
                                                                    _j.label = 17;
                                                                case 17:
                                                                    v++;
                                                                    return [3, 6];
                                                                case 18: return [2, (o.ch_reverse && c.reverse(), s.success(c))];
                                                            }
                                                        });
                                                    });
                                                }, pages: function (a) {
                                                    return __awaiter(this, void 0, void 0, function () { var n, c, l, f, x, v, S, w, _b, _c, E, k; return __generator(this, function (_d) {
                                                        switch (_d.label) {
                                                            case 0:
                                                                n = [], c = [a], l = a, f = 0;
                                                                _d.label = 1;
                                                            case 1:
                                                                if (!(f < (o.pages_max || 40))) return [3, 8];
                                                                return [4, h.html(l, o.req)];
                                                            case 2:
                                                                x = _d.sent(), v = x.select(o.pages || ".page-chapter img, .reading-content img, .chapter-content img"), S = 0;
                                                                _d.label = 3;
                                                            case 3:
                                                                if (!(S < v.size())) return [3, 6];
                                                                _c = (_b = h).img;
                                                                return [4, v.get(S)];
                                                            case 4:
                                                                w = _c.apply(_b, [_d.sent()]);
                                                                w && n.indexOf(w) < 0 && n.push(w);
                                                                _d.label = 5;
                                                            case 5:
                                                                S++;
                                                                return [3, 3];
                                                            case 6:
                                                                if (!o.pages_next)
                                                                    return [3, 8];
                                                                E = x.select(o.pages_next).first();
                                                                if (!E)
                                                                    return [3, 8];
                                                                k = h.fix(E.attr("href"));
                                                                if (!k || c.indexOf(k) >= 0)
                                                                    return [3, 8];
                                                                c.push(k), l = k;
                                                                _d.label = 7;
                                                            case 7:
                                                                f++;
                                                                return [3, 1];
                                                            case 8: return [2, s.success(n)];
                                                        }
                                                    }); });
                                                }, text: function (a) {
                                                    return __awaiter(this, void 0, void 0, function () { var n, c, _b, _c, _d, _f; return __generator(this, function (_g) {
                                                        switch (_g.label) {
                                                            case 0: return [4, h.html(a, o.req)];
                                                            case 1:
                                                                n = _g.sent(), c = n.select(o.content || "#chapter-c, .chapter-c, #chapter-content, .chapter-content, .reading-content").first();
                                                                if (!c) return [3, 4];
                                                                _d = (_c = s).success;
                                                                return [4, h.cleanContent(c)];
                                                            case 2:
                                                                _f = [_g.sent()];
                                                                return [4, m.pick(n, o.c_title || "h1 || h2")];
                                                            case 3:
                                                                _b = _d.apply(_c, _f.concat([_g.sent()]));
                                                                return [3, 5];
                                                            case 4:
                                                                _b = s.error("Không tìm thấy nội dung");
                                                                _g.label = 5;
                                                            case 5: return [2, _b];
                                                        }
                                                    }); });
                                                }, servers: function (a) {
                                                    return __awaiter(this, void 0, void 0, function () { var n, c; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                if (!o.servers)
                                                                    return [2, s.success([{ title: "Server", data: a }])];
                                                                return [4, h.html(a, o.req)];
                                                            case 1:
                                                                n = _b.sent();
                                                                return [4, j(n.select(o.servers), function (l) {
                                                                        return __awaiter(this, void 0, void 0, function () {
                                                                            var f;
                                                                            var _b;
                                                                            return __generator(this, function (_c) {
                                                                                switch (_c.label) {
                                                                                    case 0: return [4, m.pick(l, o.server_data || ":self@data-link || :self@data-src || :self@href")];
                                                                                    case 1:
                                                                                        f = _c.sent();
                                                                                        _b = {};
                                                                                        return [4, l.text()];
                                                                                    case 2: return [2, (_b.title = (_c.sent()) || "Server", _b.data = h.fix(f), _b)];
                                                                                }
                                                                            });
                                                                        });
                                                                    })];
                                                            case 2:
                                                                c = (_b.sent()).filter(function (l) { return l.data; });
                                                                return [2, s.success(c.length ? c : [{ title: "Server", data: a }])];
                                                        }
                                                    }); });
                                                }, sniff: function (a) { a = String(a || "").replace(/\\\//g, "/"); var n = a.match(/https?:[^"'\s<>\\]+?\.m3u8[^"'\s<>\\]*/i) || a.match(/https?:[^"'\s<>\\]+?\.mp4[^"'\s<>\\]*/i); return n ? n[0] : ""; }, track: function (a, n) {
                                                    return __awaiter(this, void 0, void 0, function () { var c, l, f, x, v, S; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                if (n = n || 0, /\.(m3u8|mp4)(\?|$)/i.test(a))
                                                                    return [2, s.success({ type: "native", data: a, headers: { Referer: T + "/" } })];
                                                                return [4, h.get(a)];
                                                            case 1:
                                                                c = _b.sent();
                                                                return [4, c.text()];
                                                            case 2:
                                                                l = _b.sent(), f = m.sniff(l);
                                                                if (f)
                                                                    return [2, s.success({ type: "native", data: f, headers: { Referer: n ? a : T + "/" } })];
                                                                x = i.parse(l, a), v = x.select(o.iframe || "iframe[src], iframe[data-src]").first();
                                                                if (!(v && n < 2)) return [3, 4];
                                                                S = h.fix(v.attr("src") || v.attr("data-src"));
                                                                if (!S) return [3, 4];
                                                                return [4, m.track(S, n + 1)];
                                                            case 3: return [2, _b.sent()];
                                                            case 4: return [2, s.success({ type: "webview", data: a })];
                                                        }
                                                    }); });
                                                } };
                                            return [2, typeof G == "function" ? G : void 0];
                                        }); });
                                    })()];
                            case 1: return [2, _b.sent()];
                        }
                    }); });
                })(t.fetch, t.Http, t.Html, t.Response, t.localStorage, t.cacheStorage, t.localConfig, t.localCookie, t.sleep, t.Log, t.console, t.log, t.UserAgent, t.Engine, t.Graphics, t.Script)];
        }); });
    }, toc: function (t, e) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            return [2, (function (u, r, i, s, d, b, p, g, A, D, N, q, L, U, X, J) {
                    return __awaiter(this, void 0, void 0, function () { var F; return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                F = e("DOMAIN");
                                return [4, (function () {
                                        return __awaiter(this, void 0, void 0, function () { function G(a) {
                                            return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                                                switch (_b.label) {
                                                    case 0: return [4, m.toc(a)];
                                                    case 1: return [2, _b.sent()];
                                                }
                                            }); });
                                        } var T, o, h, m; return __generator(this, function (_b) {
                                            T = "https://www.gongzicp.com";
                                            try {
                                                F && (T = String(F).replace(/\/+$/, ""));
                                            }
                                            catch (a) { }
                                            o = { tabs: { "Mới cập nhật": "/[?page={p}]" }, search: "/tim-kiem?keyword={q}[&page={p}]", ch_list: "a[href*=chuong], a[href*=chap], a[href*=tap-], a[href*=episode]" }, h = { img: function (a) { if (!a)
                                                    return ""; for (var n = ["data-src", "data-lazy-src", "data-original", "data-lazyload", "data-cfsrc", "data-url", "src"], c = 0; c < n.length; c++) {
                                                    var l = a.attr(n[c]);
                                                    if (l && l.indexOf("data:image") !== 0 && !/dflazy|lazy\.|placeholder|blank\.(gif|png)/i.test(l))
                                                        return h.fix(l.trim());
                                                } var f = a.attr("data-srcset") || a.attr("srcset"); return f ? h.fix(f.split(",").pop().trim().split(" ")[0]) : ""; }, fix: function (a) { return a ? (a = String(a).trim(), a.indexOf("//") === 0 ? "https:" + a : a.indexOf("http") === 0 ? a : a.charAt(0) === "/" ? T + a : T + "/" + a) : ""; }, text: function (a, n) {
                                                    return __awaiter(this, void 0, void 0, function () { var c, l; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                c = 0;
                                                                _b.label = 1;
                                                            case 1:
                                                                if (!(c < n.length)) return [3, 4];
                                                                return [4, a.select(n[c]).text()];
                                                            case 2:
                                                                l = _b.sent();
                                                                if (l)
                                                                    return [2, l.trim()];
                                                                _b.label = 3;
                                                            case 3:
                                                                c++;
                                                                return [3, 1];
                                                            case 4: return [2, ""];
                                                        }
                                                    }); });
                                                }, get: function (a, n) {
                                                    return __awaiter(this, void 0, void 0, function () { var c, l, f; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                n = n || {};
                                                                c = { Referer: T + "/" };
                                                                if (n.headers)
                                                                    for (l in n.headers)
                                                                        c[l] = n.headers[l];
                                                                return [4, u(a, { method: n.method, headers: c, body: n.body })];
                                                            case 1:
                                                                f = _b.sent();
                                                                return [2, f];
                                                        }
                                                    }); });
                                                }, html: function (a, n) {
                                                    return __awaiter(this, void 0, void 0, function () { var c; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0: return [4, h.get(a, n)];
                                                            case 1:
                                                                c = _b.sent();
                                                                if (!c.ok)
                                                                    throw new Error("HTTP " + c.status + " " + a);
                                                                return [4, c.html(n && n.charset)];
                                                            case 2: return [2, _b.sent()];
                                                        }
                                                    }); });
                                                }, json: function (a, n) {
                                                    return __awaiter(this, void 0, void 0, function () { var c; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0: return [4, h.get(a, n)];
                                                            case 1:
                                                                c = _b.sent();
                                                                if (!c.ok)
                                                                    throw new Error("HTTP " + c.status + " " + a);
                                                                return [4, c.json()];
                                                            case 2: return [2, _b.sent()];
                                                        }
                                                    }); });
                                                }, page: function (a) { var n = parseInt(a || "1", 10); return isNaN(n) || n < 1 ? 1 : n; }, next: function (a, n) { return a ? String(h.page(n) + 1) : ""; }, isUrl: function (a) { return /^(https?:)?\/\//.test(a || "") || (a || "").charAt(0) === "/"; }, enc: function (a) { return encodeURIComponent(a || ""); }, cleanContent: function (a) {
                                                    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                a.select("script, style, ins, iframe, noscript, .ads, .ad, [class*=ads-], [id*=ads], .adsbygoogle, button, form").remove();
                                                                return [4, a.html()];
                                                            case 1: return [2, (_b.sent()).replace(/&nbsp;/g, " ").replace(/(<br\s*\/?>\s*){3,}/gi, "<br><br>")];
                                                        }
                                                    }); });
                                                }, ongoing: function (a) { return !/(hoàn thành|hoàn tất|full|completed|完结|完本|已完结|finished|end)/i.test(a || ""); } }, m = { pick: function (a, n) {
                                                    return __awaiter(this, void 0, void 0, function () { var c, l, f, x, v, S, w, E, _b, _c; return __generator(this, function (_d) {
                                                        switch (_d.label) {
                                                            case 0:
                                                                if (!n || !a)
                                                                    return [2, ""];
                                                                c = String(n).split(" || "), l = 0;
                                                                _d.label = 1;
                                                            case 1:
                                                                if (!(l < c.length)) return [3, 9];
                                                                f = c[l], x = "text", v = f.lastIndexOf("@");
                                                                v > 0 && !/\[[^\]]*@/.test(f.slice(v)) && (x = f.slice(v + 1), f = f.slice(0, v));
                                                                S = f === ":self" ? null : a.select(f), w = f === ":self" ? a : S.size() ? S.first() : null;
                                                                if (!w) return [3, 8];
                                                                if (!(x === "text")) return [3, 3];
                                                                return [4, w.text()];
                                                            case 2:
                                                                _b = _d.sent();
                                                                return [3, 7];
                                                            case 3:
                                                                if (!(x === "html")) return [3, 5];
                                                                return [4, w.html()];
                                                            case 4:
                                                                _c = _d.sent();
                                                                return [3, 6];
                                                            case 5:
                                                                _c = x === "img" ? h.img(w.is("img") ? w : w.select("img").first()) : x === "own" ? w.ownText() : w.attr(x);
                                                                _d.label = 6;
                                                            case 6:
                                                                _b = _c;
                                                                _d.label = 7;
                                                            case 7:
                                                                E = _b;
                                                                if (E)
                                                                    return [2, String(E).trim()];
                                                                _d.label = 8;
                                                            case 8:
                                                                l++;
                                                                return [3, 1];
                                                            case 9: return [2, ""];
                                                        }
                                                    }); });
                                                }, url: function (a, n, c) { var l = h.page(n), f = String(a); return f = f.replace(/\[([^\]]*)\]/g, function (x, v) { return l > 1 ? v : ""; }), f = f.replace(/\{p\}/g, String(l)).replace(/\{p0\}/g, String(l - 1)).replace(/\{q\}/g, h.enc(c || "")).replace(/\{base\}/g, T), h.fix(f); }, items: function (a) {
                                                    return __awaiter(this, void 0, void 0, function () {
                                                        var n, c, l, f, x, v, S, _b, _c, _d;
                                                        var _f;
                                                        return __generator(this, function (_g) {
                                                            switch (_g.label) {
                                                                case 0:
                                                                    n = a.select(o.item), c = [], l = {}, f = 0;
                                                                    _g.label = 1;
                                                                case 1:
                                                                    if (!(f < n.size())) return [3, 9];
                                                                    return [4, n.get(f)];
                                                                case 2:
                                                                    x = _g.sent();
                                                                    return [4, m.pick(x, o.link || "a@href")];
                                                                case 3:
                                                                    v = _g.sent();
                                                                    if (!!(!v || l[v] || /^javascript|#$/.test(v))) return [3, 8];
                                                                    return [4, m.pick(x, o.title || "h3 || h2 || a@title || img@alt")];
                                                                case 4:
                                                                    S = _g.sent();
                                                                    _b = S;
                                                                    if (!_b) return [3, 7];
                                                                    l[v] = 1;
                                                                    _d = (_c = c).push;
                                                                    _f = { name: S, link: h.fix(v) };
                                                                    return [4, m.pick(x, o.cover || "img@img")];
                                                                case 5:
                                                                    _f.cover = _g.sent();
                                                                    return [4, m.pick(x, o.desc || "")];
                                                                case 6:
                                                                    _b = (_d.apply(_c, [(_f.description = _g.sent(), _f.host = T, _f)]));
                                                                    _g.label = 7;
                                                                case 7:
                                                                    _b;
                                                                    _g.label = 8;
                                                                case 8:
                                                                    f++;
                                                                    return [3, 1];
                                                                case 9: return [2, c];
                                                            }
                                                        });
                                                    });
                                                }, listPage: function (a, n, c) {
                                                    return __awaiter(this, void 0, void 0, function () { var l, f, x; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0: return [4, h.html(m.url(a, n, c), o.req)];
                                                            case 1:
                                                                l = _b.sent();
                                                                return [4, m.items(l)];
                                                            case 2:
                                                                f = _b.sent(), x = o.next ? l.select(o.next).size() > 0 : f.length >= (o.pageSize || 10);
                                                                return [2, s.success(f, h.next(x && f.length > 0, n))];
                                                        }
                                                    }); });
                                                }, browse: function (a, n) {
                                                    return __awaiter(this, void 0, void 0, function () { var c; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                c = o.tabs && o.tabs[a] || a;
                                                                return [4, m.listPage(c, n, "")];
                                                            case 1: return [2, _b.sent()];
                                                        }
                                                    }); });
                                                }, search: function (a, n) {
                                                    return __awaiter(this, void 0, void 0, function () { var c; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                if (!h.isUrl(a)) return [3, 2];
                                                                c = h.fix(a);
                                                                return [4, m.listPage(c + (c.indexOf("?") > 0 ? "&" : "?") + (o.pageParam || "page") + "={p}", n, "")];
                                                            case 1: return [2, _b.sent()];
                                                            case 2: return [4, m.listPage(o.search, n, a)];
                                                            case 3: return [2, _b.sent()];
                                                        }
                                                    }); });
                                                }, genre: function () {
                                                    return __awaiter(this, void 0, void 0, function () { var a, n; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                if (!o.genre)
                                                                    return [2, s.success([])];
                                                                return [4, h.html(h.fix(o.genrePage || "/"))];
                                                            case 1:
                                                                a = _b.sent();
                                                                return [4, j(a.select(o.genre), function (c) {
                                                                        return __awaiter(this, void 0, void 0, function () {
                                                                            var _b;
                                                                            return __generator(this, function (_c) {
                                                                                switch (_c.label) {
                                                                                    case 0:
                                                                                        _b = {};
                                                                                        return [4, c.text()];
                                                                                    case 1: return [2, (_b.title = _c.sent(), _b.input = h.fix(c.attr("href")), _b.script = "search.js", _b)];
                                                                                }
                                                                            });
                                                                        });
                                                                    })];
                                                            case 2:
                                                                n = _b.sent();
                                                                return [2, s.success(n.filter(function (c) { return c.title; }))];
                                                        }
                                                    }); });
                                                }, detail: function (a) {
                                                    return __awaiter(this, void 0, void 0, function () {
                                                        var n, c, l, _b, _c, _d, _f, _g;
                                                        var _h;
                                                        return __generator(this, function (_j) {
                                                            switch (_j.label) {
                                                                case 0: return [4, h.html(a, o.req)];
                                                                case 1:
                                                                    n = _j.sent();
                                                                    if (!o.d_genres) return [3, 3];
                                                                    return [4, j(n.select(o.d_genres), function (f) {
                                                                            return __awaiter(this, void 0, void 0, function () {
                                                                                var _b;
                                                                                return __generator(this, function (_c) {
                                                                                    switch (_c.label) {
                                                                                        case 0:
                                                                                            _b = {};
                                                                                            return [4, f.text()];
                                                                                        case 1: return [2, (_b.title = _c.sent(), _b.input = h.fix(f.attr("href")), _b.script = "search.js", _b)];
                                                                                    }
                                                                                });
                                                                            });
                                                                        })];
                                                                case 2:
                                                                    _b = _j.sent();
                                                                    return [3, 4];
                                                                case 3:
                                                                    _b = [];
                                                                    _j.label = 4;
                                                                case 4:
                                                                    c = _b;
                                                                    return [4, m.pick(n, o.d_status)];
                                                                case 5:
                                                                    l = _j.sent();
                                                                    _d = (_c = s).success;
                                                                    _h = {};
                                                                    return [4, m.pick(n, o.d_title || "h1")];
                                                                case 6:
                                                                    _h.name = _j.sent();
                                                                    _g = (_f = h).fix;
                                                                    return [4, m.pick(n, o.d_cover || "meta[property=og:image]@content")];
                                                                case 7:
                                                                    _h.cover = _g.apply(_f, [_j.sent()]);
                                                                    return [4, m.pick(n, o.d_author)];
                                                                case 8:
                                                                    _h.author = _j.sent();
                                                                    return [4, m.pick(n, (o.d_desc || "meta[name=description]@content").replace(/$/, ""))];
                                                                case 9: return [2, _d.apply(_c, [(_h.description = _j.sent(), _h.detail = l ? "Tình trạng: " + l : "", _h.ongoing = h.ongoing(l), _h.genres = c, _h.host = T, _h)])];
                                                            }
                                                        });
                                                    });
                                                }, toc: function (a) {
                                                    return __awaiter(this, void 0, void 0, function () {
                                                        var n, c, l, f, x, _b, v, S, w, E, k, _c, _d, _f, _g, B, H;
                                                        var _h;
                                                        return __generator(this, function (_j) {
                                                            switch (_j.label) {
                                                                case 0:
                                                                    if (o.single)
                                                                        return [2, s.success([{ name: o.single === !0 ? "Xem / Đọc" : o.single, url: a, host: T }])];
                                                                    n = [a], c = [], l = {};
                                                                    return [4, h.html(a, o.req)];
                                                                case 1:
                                                                    f = _j.sent();
                                                                    if (!o.ch_url) return [3, 5];
                                                                    return [4, m.pick(f, o.ch_url)];
                                                                case 2:
                                                                    x = _j.sent();
                                                                    _b = x;
                                                                    if (!_b) return [3, 4];
                                                                    return [4, h.html(h.fix(x), o.req)];
                                                                case 3:
                                                                    _b = (f = _j.sent());
                                                                    _j.label = 4;
                                                                case 4:
                                                                    _b;
                                                                    _j.label = 5;
                                                                case 5:
                                                                    v = 0;
                                                                    _j.label = 6;
                                                                case 6:
                                                                    if (!(v < (o.ch_maxPages || 60))) return [3, 18];
                                                                    S = f.select(o.ch_list), w = 0;
                                                                    _j.label = 7;
                                                                case 7:
                                                                    if (!(w < S.size())) return [3, 15];
                                                                    return [4, S.get(w)];
                                                                case 8:
                                                                    E = _j.sent(), k = E.attr("href") || E.attr("data-href");
                                                                    _c = !k || k === "#" || l[k];
                                                                    if (_c) return [3, 13];
                                                                    l[k] = 1;
                                                                    _f = (_d = c).push;
                                                                    _h = {};
                                                                    if (!o.ch_name) return [3, 10];
                                                                    return [4, m.pick(E, o.ch_name)];
                                                                case 9:
                                                                    _g = _j.sent();
                                                                    return [3, 12];
                                                                case 10: return [4, E.text()];
                                                                case 11:
                                                                    _g = _j.sent();
                                                                    _j.label = 12;
                                                                case 12:
                                                                    _c = (_f.apply(_d, [(_h.name = (_g) || E.attr("title"), _h.url = h.fix(k), _h.host = T, _h)]));
                                                                    _j.label = 13;
                                                                case 13:
                                                                    _c;
                                                                    _j.label = 14;
                                                                case 14:
                                                                    w++;
                                                                    return [3, 7];
                                                                case 15:
                                                                    B = o.ch_next ? f.select(o.ch_next).first() : null;
                                                                    if (!B || !B.attr("href"))
                                                                        return [3, 18];
                                                                    H = h.fix(B.attr("href"));
                                                                    if (n.indexOf(H) >= 0)
                                                                        return [3, 18];
                                                                    n.push(H);
                                                                    return [4, h.html(H, o.req)];
                                                                case 16:
                                                                    f = _j.sent();
                                                                    _j.label = 17;
                                                                case 17:
                                                                    v++;
                                                                    return [3, 6];
                                                                case 18: return [2, (o.ch_reverse && c.reverse(), s.success(c))];
                                                            }
                                                        });
                                                    });
                                                }, pages: function (a) {
                                                    return __awaiter(this, void 0, void 0, function () { var n, c, l, f, x, v, S, w, _b, _c, E, k; return __generator(this, function (_d) {
                                                        switch (_d.label) {
                                                            case 0:
                                                                n = [], c = [a], l = a, f = 0;
                                                                _d.label = 1;
                                                            case 1:
                                                                if (!(f < (o.pages_max || 40))) return [3, 8];
                                                                return [4, h.html(l, o.req)];
                                                            case 2:
                                                                x = _d.sent(), v = x.select(o.pages || ".page-chapter img, .reading-content img, .chapter-content img"), S = 0;
                                                                _d.label = 3;
                                                            case 3:
                                                                if (!(S < v.size())) return [3, 6];
                                                                _c = (_b = h).img;
                                                                return [4, v.get(S)];
                                                            case 4:
                                                                w = _c.apply(_b, [_d.sent()]);
                                                                w && n.indexOf(w) < 0 && n.push(w);
                                                                _d.label = 5;
                                                            case 5:
                                                                S++;
                                                                return [3, 3];
                                                            case 6:
                                                                if (!o.pages_next)
                                                                    return [3, 8];
                                                                E = x.select(o.pages_next).first();
                                                                if (!E)
                                                                    return [3, 8];
                                                                k = h.fix(E.attr("href"));
                                                                if (!k || c.indexOf(k) >= 0)
                                                                    return [3, 8];
                                                                c.push(k), l = k;
                                                                _d.label = 7;
                                                            case 7:
                                                                f++;
                                                                return [3, 1];
                                                            case 8: return [2, s.success(n)];
                                                        }
                                                    }); });
                                                }, text: function (a) {
                                                    return __awaiter(this, void 0, void 0, function () { var n, c, _b, _c, _d, _f; return __generator(this, function (_g) {
                                                        switch (_g.label) {
                                                            case 0: return [4, h.html(a, o.req)];
                                                            case 1:
                                                                n = _g.sent(), c = n.select(o.content || "#chapter-c, .chapter-c, #chapter-content, .chapter-content, .reading-content").first();
                                                                if (!c) return [3, 4];
                                                                _d = (_c = s).success;
                                                                return [4, h.cleanContent(c)];
                                                            case 2:
                                                                _f = [_g.sent()];
                                                                return [4, m.pick(n, o.c_title || "h1 || h2")];
                                                            case 3:
                                                                _b = _d.apply(_c, _f.concat([_g.sent()]));
                                                                return [3, 5];
                                                            case 4:
                                                                _b = s.error("Không tìm thấy nội dung");
                                                                _g.label = 5;
                                                            case 5: return [2, _b];
                                                        }
                                                    }); });
                                                }, servers: function (a) {
                                                    return __awaiter(this, void 0, void 0, function () { var n, c; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                if (!o.servers)
                                                                    return [2, s.success([{ title: "Server", data: a }])];
                                                                return [4, h.html(a, o.req)];
                                                            case 1:
                                                                n = _b.sent();
                                                                return [4, j(n.select(o.servers), function (l) {
                                                                        return __awaiter(this, void 0, void 0, function () {
                                                                            var f;
                                                                            var _b;
                                                                            return __generator(this, function (_c) {
                                                                                switch (_c.label) {
                                                                                    case 0: return [4, m.pick(l, o.server_data || ":self@data-link || :self@data-src || :self@href")];
                                                                                    case 1:
                                                                                        f = _c.sent();
                                                                                        _b = {};
                                                                                        return [4, l.text()];
                                                                                    case 2: return [2, (_b.title = (_c.sent()) || "Server", _b.data = h.fix(f), _b)];
                                                                                }
                                                                            });
                                                                        });
                                                                    })];
                                                            case 2:
                                                                c = (_b.sent()).filter(function (l) { return l.data; });
                                                                return [2, s.success(c.length ? c : [{ title: "Server", data: a }])];
                                                        }
                                                    }); });
                                                }, sniff: function (a) { a = String(a || "").replace(/\\\//g, "/"); var n = a.match(/https?:[^"'\s<>\\]+?\.m3u8[^"'\s<>\\]*/i) || a.match(/https?:[^"'\s<>\\]+?\.mp4[^"'\s<>\\]*/i); return n ? n[0] : ""; }, track: function (a, n) {
                                                    return __awaiter(this, void 0, void 0, function () { var c, l, f, x, v, S; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                if (n = n || 0, /\.(m3u8|mp4)(\?|$)/i.test(a))
                                                                    return [2, s.success({ type: "native", data: a, headers: { Referer: T + "/" } })];
                                                                return [4, h.get(a)];
                                                            case 1:
                                                                c = _b.sent();
                                                                return [4, c.text()];
                                                            case 2:
                                                                l = _b.sent(), f = m.sniff(l);
                                                                if (f)
                                                                    return [2, s.success({ type: "native", data: f, headers: { Referer: n ? a : T + "/" } })];
                                                                x = i.parse(l, a), v = x.select(o.iframe || "iframe[src], iframe[data-src]").first();
                                                                if (!(v && n < 2)) return [3, 4];
                                                                S = h.fix(v.attr("src") || v.attr("data-src"));
                                                                if (!S) return [3, 4];
                                                                return [4, m.track(S, n + 1)];
                                                            case 3: return [2, _b.sent()];
                                                            case 4: return [2, s.success({ type: "webview", data: a })];
                                                        }
                                                    }); });
                                                } };
                                            return [2, typeof G == "function" ? G : void 0];
                                        }); });
                                    })()];
                            case 1: return [2, _b.sent()];
                        }
                    }); });
                })(t.fetch, t.Http, t.Html, t.Response, t.localStorage, t.cacheStorage, t.localConfig, t.localCookie, t.sleep, t.Log, t.console, t.log, t.UserAgent, t.Engine, t.Graphics, t.Script)];
        }); });
    }, chap: function (t, e) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            return [2, (function (u, r, i, s, d, b, p, g, A, D, N, q, L, U, X, J) {
                    return __awaiter(this, void 0, void 0, function () { var F; return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                F = e("DOMAIN");
                                return [4, (function () {
                                        return __awaiter(this, void 0, void 0, function () { function G(a) {
                                            return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                                                switch (_b.label) {
                                                    case 0: return [4, m.text(a)];
                                                    case 1: return [2, _b.sent()];
                                                }
                                            }); });
                                        } var T, o, h, m; return __generator(this, function (_b) {
                                            T = "https://www.gongzicp.com";
                                            try {
                                                F && (T = String(F).replace(/\/+$/, ""));
                                            }
                                            catch (a) { }
                                            o = { tabs: { "Mới cập nhật": "/[?page={p}]" }, search: "/tim-kiem?keyword={q}[&page={p}]", ch_list: "a[href*=chuong], a[href*=chap], a[href*=tap-], a[href*=episode]" }, h = { img: function (a) { if (!a)
                                                    return ""; for (var n = ["data-src", "data-lazy-src", "data-original", "data-lazyload", "data-cfsrc", "data-url", "src"], c = 0; c < n.length; c++) {
                                                    var l = a.attr(n[c]);
                                                    if (l && l.indexOf("data:image") !== 0 && !/dflazy|lazy\.|placeholder|blank\.(gif|png)/i.test(l))
                                                        return h.fix(l.trim());
                                                } var f = a.attr("data-srcset") || a.attr("srcset"); return f ? h.fix(f.split(",").pop().trim().split(" ")[0]) : ""; }, fix: function (a) { return a ? (a = String(a).trim(), a.indexOf("//") === 0 ? "https:" + a : a.indexOf("http") === 0 ? a : a.charAt(0) === "/" ? T + a : T + "/" + a) : ""; }, text: function (a, n) {
                                                    return __awaiter(this, void 0, void 0, function () { var c, l; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                c = 0;
                                                                _b.label = 1;
                                                            case 1:
                                                                if (!(c < n.length)) return [3, 4];
                                                                return [4, a.select(n[c]).text()];
                                                            case 2:
                                                                l = _b.sent();
                                                                if (l)
                                                                    return [2, l.trim()];
                                                                _b.label = 3;
                                                            case 3:
                                                                c++;
                                                                return [3, 1];
                                                            case 4: return [2, ""];
                                                        }
                                                    }); });
                                                }, get: function (a, n) {
                                                    return __awaiter(this, void 0, void 0, function () { var c, l, f; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                n = n || {};
                                                                c = { Referer: T + "/" };
                                                                if (n.headers)
                                                                    for (l in n.headers)
                                                                        c[l] = n.headers[l];
                                                                return [4, u(a, { method: n.method, headers: c, body: n.body })];
                                                            case 1:
                                                                f = _b.sent();
                                                                return [2, f];
                                                        }
                                                    }); });
                                                }, html: function (a, n) {
                                                    return __awaiter(this, void 0, void 0, function () { var c; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0: return [4, h.get(a, n)];
                                                            case 1:
                                                                c = _b.sent();
                                                                if (!c.ok)
                                                                    throw new Error("HTTP " + c.status + " " + a);
                                                                return [4, c.html(n && n.charset)];
                                                            case 2: return [2, _b.sent()];
                                                        }
                                                    }); });
                                                }, json: function (a, n) {
                                                    return __awaiter(this, void 0, void 0, function () { var c; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0: return [4, h.get(a, n)];
                                                            case 1:
                                                                c = _b.sent();
                                                                if (!c.ok)
                                                                    throw new Error("HTTP " + c.status + " " + a);
                                                                return [4, c.json()];
                                                            case 2: return [2, _b.sent()];
                                                        }
                                                    }); });
                                                }, page: function (a) { var n = parseInt(a || "1", 10); return isNaN(n) || n < 1 ? 1 : n; }, next: function (a, n) { return a ? String(h.page(n) + 1) : ""; }, isUrl: function (a) { return /^(https?:)?\/\//.test(a || "") || (a || "").charAt(0) === "/"; }, enc: function (a) { return encodeURIComponent(a || ""); }, cleanContent: function (a) {
                                                    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                a.select("script, style, ins, iframe, noscript, .ads, .ad, [class*=ads-], [id*=ads], .adsbygoogle, button, form").remove();
                                                                return [4, a.html()];
                                                            case 1: return [2, (_b.sent()).replace(/&nbsp;/g, " ").replace(/(<br\s*\/?>\s*){3,}/gi, "<br><br>")];
                                                        }
                                                    }); });
                                                }, ongoing: function (a) { return !/(hoàn thành|hoàn tất|full|completed|完结|完本|已完结|finished|end)/i.test(a || ""); } }, m = { pick: function (a, n) {
                                                    return __awaiter(this, void 0, void 0, function () { var c, l, f, x, v, S, w, E, _b, _c; return __generator(this, function (_d) {
                                                        switch (_d.label) {
                                                            case 0:
                                                                if (!n || !a)
                                                                    return [2, ""];
                                                                c = String(n).split(" || "), l = 0;
                                                                _d.label = 1;
                                                            case 1:
                                                                if (!(l < c.length)) return [3, 9];
                                                                f = c[l], x = "text", v = f.lastIndexOf("@");
                                                                v > 0 && !/\[[^\]]*@/.test(f.slice(v)) && (x = f.slice(v + 1), f = f.slice(0, v));
                                                                S = f === ":self" ? null : a.select(f), w = f === ":self" ? a : S.size() ? S.first() : null;
                                                                if (!w) return [3, 8];
                                                                if (!(x === "text")) return [3, 3];
                                                                return [4, w.text()];
                                                            case 2:
                                                                _b = _d.sent();
                                                                return [3, 7];
                                                            case 3:
                                                                if (!(x === "html")) return [3, 5];
                                                                return [4, w.html()];
                                                            case 4:
                                                                _c = _d.sent();
                                                                return [3, 6];
                                                            case 5:
                                                                _c = x === "img" ? h.img(w.is("img") ? w : w.select("img").first()) : x === "own" ? w.ownText() : w.attr(x);
                                                                _d.label = 6;
                                                            case 6:
                                                                _b = _c;
                                                                _d.label = 7;
                                                            case 7:
                                                                E = _b;
                                                                if (E)
                                                                    return [2, String(E).trim()];
                                                                _d.label = 8;
                                                            case 8:
                                                                l++;
                                                                return [3, 1];
                                                            case 9: return [2, ""];
                                                        }
                                                    }); });
                                                }, url: function (a, n, c) { var l = h.page(n), f = String(a); return f = f.replace(/\[([^\]]*)\]/g, function (x, v) { return l > 1 ? v : ""; }), f = f.replace(/\{p\}/g, String(l)).replace(/\{p0\}/g, String(l - 1)).replace(/\{q\}/g, h.enc(c || "")).replace(/\{base\}/g, T), h.fix(f); }, items: function (a) {
                                                    return __awaiter(this, void 0, void 0, function () {
                                                        var n, c, l, f, x, v, S, _b, _c, _d;
                                                        var _f;
                                                        return __generator(this, function (_g) {
                                                            switch (_g.label) {
                                                                case 0:
                                                                    n = a.select(o.item), c = [], l = {}, f = 0;
                                                                    _g.label = 1;
                                                                case 1:
                                                                    if (!(f < n.size())) return [3, 9];
                                                                    return [4, n.get(f)];
                                                                case 2:
                                                                    x = _g.sent();
                                                                    return [4, m.pick(x, o.link || "a@href")];
                                                                case 3:
                                                                    v = _g.sent();
                                                                    if (!!(!v || l[v] || /^javascript|#$/.test(v))) return [3, 8];
                                                                    return [4, m.pick(x, o.title || "h3 || h2 || a@title || img@alt")];
                                                                case 4:
                                                                    S = _g.sent();
                                                                    _b = S;
                                                                    if (!_b) return [3, 7];
                                                                    l[v] = 1;
                                                                    _d = (_c = c).push;
                                                                    _f = { name: S, link: h.fix(v) };
                                                                    return [4, m.pick(x, o.cover || "img@img")];
                                                                case 5:
                                                                    _f.cover = _g.sent();
                                                                    return [4, m.pick(x, o.desc || "")];
                                                                case 6:
                                                                    _b = (_d.apply(_c, [(_f.description = _g.sent(), _f.host = T, _f)]));
                                                                    _g.label = 7;
                                                                case 7:
                                                                    _b;
                                                                    _g.label = 8;
                                                                case 8:
                                                                    f++;
                                                                    return [3, 1];
                                                                case 9: return [2, c];
                                                            }
                                                        });
                                                    });
                                                }, listPage: function (a, n, c) {
                                                    return __awaiter(this, void 0, void 0, function () { var l, f, x; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0: return [4, h.html(m.url(a, n, c), o.req)];
                                                            case 1:
                                                                l = _b.sent();
                                                                return [4, m.items(l)];
                                                            case 2:
                                                                f = _b.sent(), x = o.next ? l.select(o.next).size() > 0 : f.length >= (o.pageSize || 10);
                                                                return [2, s.success(f, h.next(x && f.length > 0, n))];
                                                        }
                                                    }); });
                                                }, browse: function (a, n) {
                                                    return __awaiter(this, void 0, void 0, function () { var c; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                c = o.tabs && o.tabs[a] || a;
                                                                return [4, m.listPage(c, n, "")];
                                                            case 1: return [2, _b.sent()];
                                                        }
                                                    }); });
                                                }, search: function (a, n) {
                                                    return __awaiter(this, void 0, void 0, function () { var c; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                if (!h.isUrl(a)) return [3, 2];
                                                                c = h.fix(a);
                                                                return [4, m.listPage(c + (c.indexOf("?") > 0 ? "&" : "?") + (o.pageParam || "page") + "={p}", n, "")];
                                                            case 1: return [2, _b.sent()];
                                                            case 2: return [4, m.listPage(o.search, n, a)];
                                                            case 3: return [2, _b.sent()];
                                                        }
                                                    }); });
                                                }, genre: function () {
                                                    return __awaiter(this, void 0, void 0, function () { var a, n; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                if (!o.genre)
                                                                    return [2, s.success([])];
                                                                return [4, h.html(h.fix(o.genrePage || "/"))];
                                                            case 1:
                                                                a = _b.sent();
                                                                return [4, j(a.select(o.genre), function (c) {
                                                                        return __awaiter(this, void 0, void 0, function () {
                                                                            var _b;
                                                                            return __generator(this, function (_c) {
                                                                                switch (_c.label) {
                                                                                    case 0:
                                                                                        _b = {};
                                                                                        return [4, c.text()];
                                                                                    case 1: return [2, (_b.title = _c.sent(), _b.input = h.fix(c.attr("href")), _b.script = "search.js", _b)];
                                                                                }
                                                                            });
                                                                        });
                                                                    })];
                                                            case 2:
                                                                n = _b.sent();
                                                                return [2, s.success(n.filter(function (c) { return c.title; }))];
                                                        }
                                                    }); });
                                                }, detail: function (a) {
                                                    return __awaiter(this, void 0, void 0, function () {
                                                        var n, c, l, _b, _c, _d, _f, _g;
                                                        var _h;
                                                        return __generator(this, function (_j) {
                                                            switch (_j.label) {
                                                                case 0: return [4, h.html(a, o.req)];
                                                                case 1:
                                                                    n = _j.sent();
                                                                    if (!o.d_genres) return [3, 3];
                                                                    return [4, j(n.select(o.d_genres), function (f) {
                                                                            return __awaiter(this, void 0, void 0, function () {
                                                                                var _b;
                                                                                return __generator(this, function (_c) {
                                                                                    switch (_c.label) {
                                                                                        case 0:
                                                                                            _b = {};
                                                                                            return [4, f.text()];
                                                                                        case 1: return [2, (_b.title = _c.sent(), _b.input = h.fix(f.attr("href")), _b.script = "search.js", _b)];
                                                                                    }
                                                                                });
                                                                            });
                                                                        })];
                                                                case 2:
                                                                    _b = _j.sent();
                                                                    return [3, 4];
                                                                case 3:
                                                                    _b = [];
                                                                    _j.label = 4;
                                                                case 4:
                                                                    c = _b;
                                                                    return [4, m.pick(n, o.d_status)];
                                                                case 5:
                                                                    l = _j.sent();
                                                                    _d = (_c = s).success;
                                                                    _h = {};
                                                                    return [4, m.pick(n, o.d_title || "h1")];
                                                                case 6:
                                                                    _h.name = _j.sent();
                                                                    _g = (_f = h).fix;
                                                                    return [4, m.pick(n, o.d_cover || "meta[property=og:image]@content")];
                                                                case 7:
                                                                    _h.cover = _g.apply(_f, [_j.sent()]);
                                                                    return [4, m.pick(n, o.d_author)];
                                                                case 8:
                                                                    _h.author = _j.sent();
                                                                    return [4, m.pick(n, (o.d_desc || "meta[name=description]@content").replace(/$/, ""))];
                                                                case 9: return [2, _d.apply(_c, [(_h.description = _j.sent(), _h.detail = l ? "Tình trạng: " + l : "", _h.ongoing = h.ongoing(l), _h.genres = c, _h.host = T, _h)])];
                                                            }
                                                        });
                                                    });
                                                }, toc: function (a) {
                                                    return __awaiter(this, void 0, void 0, function () {
                                                        var n, c, l, f, x, _b, v, S, w, E, k, _c, _d, _f, _g, B, H;
                                                        var _h;
                                                        return __generator(this, function (_j) {
                                                            switch (_j.label) {
                                                                case 0:
                                                                    if (o.single)
                                                                        return [2, s.success([{ name: o.single === !0 ? "Xem / Đọc" : o.single, url: a, host: T }])];
                                                                    n = [a], c = [], l = {};
                                                                    return [4, h.html(a, o.req)];
                                                                case 1:
                                                                    f = _j.sent();
                                                                    if (!o.ch_url) return [3, 5];
                                                                    return [4, m.pick(f, o.ch_url)];
                                                                case 2:
                                                                    x = _j.sent();
                                                                    _b = x;
                                                                    if (!_b) return [3, 4];
                                                                    return [4, h.html(h.fix(x), o.req)];
                                                                case 3:
                                                                    _b = (f = _j.sent());
                                                                    _j.label = 4;
                                                                case 4:
                                                                    _b;
                                                                    _j.label = 5;
                                                                case 5:
                                                                    v = 0;
                                                                    _j.label = 6;
                                                                case 6:
                                                                    if (!(v < (o.ch_maxPages || 60))) return [3, 18];
                                                                    S = f.select(o.ch_list), w = 0;
                                                                    _j.label = 7;
                                                                case 7:
                                                                    if (!(w < S.size())) return [3, 15];
                                                                    return [4, S.get(w)];
                                                                case 8:
                                                                    E = _j.sent(), k = E.attr("href") || E.attr("data-href");
                                                                    _c = !k || k === "#" || l[k];
                                                                    if (_c) return [3, 13];
                                                                    l[k] = 1;
                                                                    _f = (_d = c).push;
                                                                    _h = {};
                                                                    if (!o.ch_name) return [3, 10];
                                                                    return [4, m.pick(E, o.ch_name)];
                                                                case 9:
                                                                    _g = _j.sent();
                                                                    return [3, 12];
                                                                case 10: return [4, E.text()];
                                                                case 11:
                                                                    _g = _j.sent();
                                                                    _j.label = 12;
                                                                case 12:
                                                                    _c = (_f.apply(_d, [(_h.name = (_g) || E.attr("title"), _h.url = h.fix(k), _h.host = T, _h)]));
                                                                    _j.label = 13;
                                                                case 13:
                                                                    _c;
                                                                    _j.label = 14;
                                                                case 14:
                                                                    w++;
                                                                    return [3, 7];
                                                                case 15:
                                                                    B = o.ch_next ? f.select(o.ch_next).first() : null;
                                                                    if (!B || !B.attr("href"))
                                                                        return [3, 18];
                                                                    H = h.fix(B.attr("href"));
                                                                    if (n.indexOf(H) >= 0)
                                                                        return [3, 18];
                                                                    n.push(H);
                                                                    return [4, h.html(H, o.req)];
                                                                case 16:
                                                                    f = _j.sent();
                                                                    _j.label = 17;
                                                                case 17:
                                                                    v++;
                                                                    return [3, 6];
                                                                case 18: return [2, (o.ch_reverse && c.reverse(), s.success(c))];
                                                            }
                                                        });
                                                    });
                                                }, pages: function (a) {
                                                    return __awaiter(this, void 0, void 0, function () { var n, c, l, f, x, v, S, w, _b, _c, E, k; return __generator(this, function (_d) {
                                                        switch (_d.label) {
                                                            case 0:
                                                                n = [], c = [a], l = a, f = 0;
                                                                _d.label = 1;
                                                            case 1:
                                                                if (!(f < (o.pages_max || 40))) return [3, 8];
                                                                return [4, h.html(l, o.req)];
                                                            case 2:
                                                                x = _d.sent(), v = x.select(o.pages || ".page-chapter img, .reading-content img, .chapter-content img"), S = 0;
                                                                _d.label = 3;
                                                            case 3:
                                                                if (!(S < v.size())) return [3, 6];
                                                                _c = (_b = h).img;
                                                                return [4, v.get(S)];
                                                            case 4:
                                                                w = _c.apply(_b, [_d.sent()]);
                                                                w && n.indexOf(w) < 0 && n.push(w);
                                                                _d.label = 5;
                                                            case 5:
                                                                S++;
                                                                return [3, 3];
                                                            case 6:
                                                                if (!o.pages_next)
                                                                    return [3, 8];
                                                                E = x.select(o.pages_next).first();
                                                                if (!E)
                                                                    return [3, 8];
                                                                k = h.fix(E.attr("href"));
                                                                if (!k || c.indexOf(k) >= 0)
                                                                    return [3, 8];
                                                                c.push(k), l = k;
                                                                _d.label = 7;
                                                            case 7:
                                                                f++;
                                                                return [3, 1];
                                                            case 8: return [2, s.success(n)];
                                                        }
                                                    }); });
                                                }, text: function (a) {
                                                    return __awaiter(this, void 0, void 0, function () { var n, c, _b, _c, _d, _f; return __generator(this, function (_g) {
                                                        switch (_g.label) {
                                                            case 0: return [4, h.html(a, o.req)];
                                                            case 1:
                                                                n = _g.sent(), c = n.select(o.content || "#chapter-c, .chapter-c, #chapter-content, .chapter-content, .reading-content").first();
                                                                if (!c) return [3, 4];
                                                                _d = (_c = s).success;
                                                                return [4, h.cleanContent(c)];
                                                            case 2:
                                                                _f = [_g.sent()];
                                                                return [4, m.pick(n, o.c_title || "h1 || h2")];
                                                            case 3:
                                                                _b = _d.apply(_c, _f.concat([_g.sent()]));
                                                                return [3, 5];
                                                            case 4:
                                                                _b = s.error("Không tìm thấy nội dung");
                                                                _g.label = 5;
                                                            case 5: return [2, _b];
                                                        }
                                                    }); });
                                                }, servers: function (a) {
                                                    return __awaiter(this, void 0, void 0, function () { var n, c; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                if (!o.servers)
                                                                    return [2, s.success([{ title: "Server", data: a }])];
                                                                return [4, h.html(a, o.req)];
                                                            case 1:
                                                                n = _b.sent();
                                                                return [4, j(n.select(o.servers), function (l) {
                                                                        return __awaiter(this, void 0, void 0, function () {
                                                                            var f;
                                                                            var _b;
                                                                            return __generator(this, function (_c) {
                                                                                switch (_c.label) {
                                                                                    case 0: return [4, m.pick(l, o.server_data || ":self@data-link || :self@data-src || :self@href")];
                                                                                    case 1:
                                                                                        f = _c.sent();
                                                                                        _b = {};
                                                                                        return [4, l.text()];
                                                                                    case 2: return [2, (_b.title = (_c.sent()) || "Server", _b.data = h.fix(f), _b)];
                                                                                }
                                                                            });
                                                                        });
                                                                    })];
                                                            case 2:
                                                                c = (_b.sent()).filter(function (l) { return l.data; });
                                                                return [2, s.success(c.length ? c : [{ title: "Server", data: a }])];
                                                        }
                                                    }); });
                                                }, sniff: function (a) { a = String(a || "").replace(/\\\//g, "/"); var n = a.match(/https?:[^"'\s<>\\]+?\.m3u8[^"'\s<>\\]*/i) || a.match(/https?:[^"'\s<>\\]+?\.mp4[^"'\s<>\\]*/i); return n ? n[0] : ""; }, track: function (a, n) {
                                                    return __awaiter(this, void 0, void 0, function () { var c, l, f, x, v, S; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                if (n = n || 0, /\.(m3u8|mp4)(\?|$)/i.test(a))
                                                                    return [2, s.success({ type: "native", data: a, headers: { Referer: T + "/" } })];
                                                                return [4, h.get(a)];
                                                            case 1:
                                                                c = _b.sent();
                                                                return [4, c.text()];
                                                            case 2:
                                                                l = _b.sent(), f = m.sniff(l);
                                                                if (f)
                                                                    return [2, s.success({ type: "native", data: f, headers: { Referer: n ? a : T + "/" } })];
                                                                x = i.parse(l, a), v = x.select(o.iframe || "iframe[src], iframe[data-src]").first();
                                                                if (!(v && n < 2)) return [3, 4];
                                                                S = h.fix(v.attr("src") || v.attr("data-src"));
                                                                if (!S) return [3, 4];
                                                                return [4, m.track(S, n + 1)];
                                                            case 3: return [2, _b.sent()];
                                                            case 4: return [2, s.success({ type: "webview", data: a })];
                                                        }
                                                    }); });
                                                } };
                                            return [2, typeof G == "function" ? G : void 0];
                                        }); });
                                    })()];
                            case 1: return [2, _b.sent()];
                        }
                    }); });
                })(t.fetch, t.Http, t.Html, t.Response, t.localStorage, t.cacheStorage, t.localConfig, t.localCookie, t.sleep, t.Log, t.console, t.log, t.UserAgent, t.Engine, t.Graphics, t.Script)];
        }); });
    }, browse: function (t, e) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            return [2, (function (u, r, i, s, d, b, p, g, A, D, N, q, L, U, X, J) {
                    return __awaiter(this, void 0, void 0, function () { var F; return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                F = e("DOMAIN");
                                return [4, (function () {
                                        return __awaiter(this, void 0, void 0, function () { function G(a, n) {
                                            return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                                                switch (_b.label) {
                                                    case 0: return [4, m.browse(a, n)];
                                                    case 1: return [2, _b.sent()];
                                                }
                                            }); });
                                        } var T, o, h, m; return __generator(this, function (_b) {
                                            T = "https://www.gongzicp.com";
                                            try {
                                                F && (T = String(F).replace(/\/+$/, ""));
                                            }
                                            catch (a) { }
                                            o = { tabs: { "Mới cập nhật": "/[?page={p}]" }, search: "/tim-kiem?keyword={q}[&page={p}]", ch_list: "a[href*=chuong], a[href*=chap], a[href*=tap-], a[href*=episode]" }, h = { img: function (a) { if (!a)
                                                    return ""; for (var n = ["data-src", "data-lazy-src", "data-original", "data-lazyload", "data-cfsrc", "data-url", "src"], c = 0; c < n.length; c++) {
                                                    var l = a.attr(n[c]);
                                                    if (l && l.indexOf("data:image") !== 0 && !/dflazy|lazy\.|placeholder|blank\.(gif|png)/i.test(l))
                                                        return h.fix(l.trim());
                                                } var f = a.attr("data-srcset") || a.attr("srcset"); return f ? h.fix(f.split(",").pop().trim().split(" ")[0]) : ""; }, fix: function (a) { return a ? (a = String(a).trim(), a.indexOf("//") === 0 ? "https:" + a : a.indexOf("http") === 0 ? a : a.charAt(0) === "/" ? T + a : T + "/" + a) : ""; }, text: function (a, n) {
                                                    return __awaiter(this, void 0, void 0, function () { var c, l; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                c = 0;
                                                                _b.label = 1;
                                                            case 1:
                                                                if (!(c < n.length)) return [3, 4];
                                                                return [4, a.select(n[c]).text()];
                                                            case 2:
                                                                l = _b.sent();
                                                                if (l)
                                                                    return [2, l.trim()];
                                                                _b.label = 3;
                                                            case 3:
                                                                c++;
                                                                return [3, 1];
                                                            case 4: return [2, ""];
                                                        }
                                                    }); });
                                                }, get: function (a, n) {
                                                    return __awaiter(this, void 0, void 0, function () { var c, l, f; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                n = n || {};
                                                                c = { Referer: T + "/" };
                                                                if (n.headers)
                                                                    for (l in n.headers)
                                                                        c[l] = n.headers[l];
                                                                return [4, u(a, { method: n.method, headers: c, body: n.body })];
                                                            case 1:
                                                                f = _b.sent();
                                                                return [2, f];
                                                        }
                                                    }); });
                                                }, html: function (a, n) {
                                                    return __awaiter(this, void 0, void 0, function () { var c; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0: return [4, h.get(a, n)];
                                                            case 1:
                                                                c = _b.sent();
                                                                if (!c.ok)
                                                                    throw new Error("HTTP " + c.status + " " + a);
                                                                return [4, c.html(n && n.charset)];
                                                            case 2: return [2, _b.sent()];
                                                        }
                                                    }); });
                                                }, json: function (a, n) {
                                                    return __awaiter(this, void 0, void 0, function () { var c; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0: return [4, h.get(a, n)];
                                                            case 1:
                                                                c = _b.sent();
                                                                if (!c.ok)
                                                                    throw new Error("HTTP " + c.status + " " + a);
                                                                return [4, c.json()];
                                                            case 2: return [2, _b.sent()];
                                                        }
                                                    }); });
                                                }, page: function (a) { var n = parseInt(a || "1", 10); return isNaN(n) || n < 1 ? 1 : n; }, next: function (a, n) { return a ? String(h.page(n) + 1) : ""; }, isUrl: function (a) { return /^(https?:)?\/\//.test(a || "") || (a || "").charAt(0) === "/"; }, enc: function (a) { return encodeURIComponent(a || ""); }, cleanContent: function (a) {
                                                    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                a.select("script, style, ins, iframe, noscript, .ads, .ad, [class*=ads-], [id*=ads], .adsbygoogle, button, form").remove();
                                                                return [4, a.html()];
                                                            case 1: return [2, (_b.sent()).replace(/&nbsp;/g, " ").replace(/(<br\s*\/?>\s*){3,}/gi, "<br><br>")];
                                                        }
                                                    }); });
                                                }, ongoing: function (a) { return !/(hoàn thành|hoàn tất|full|completed|完结|完本|已完结|finished|end)/i.test(a || ""); } }, m = { pick: function (a, n) {
                                                    return __awaiter(this, void 0, void 0, function () { var c, l, f, x, v, S, w, E, _b, _c; return __generator(this, function (_d) {
                                                        switch (_d.label) {
                                                            case 0:
                                                                if (!n || !a)
                                                                    return [2, ""];
                                                                c = String(n).split(" || "), l = 0;
                                                                _d.label = 1;
                                                            case 1:
                                                                if (!(l < c.length)) return [3, 9];
                                                                f = c[l], x = "text", v = f.lastIndexOf("@");
                                                                v > 0 && !/\[[^\]]*@/.test(f.slice(v)) && (x = f.slice(v + 1), f = f.slice(0, v));
                                                                S = f === ":self" ? null : a.select(f), w = f === ":self" ? a : S.size() ? S.first() : null;
                                                                if (!w) return [3, 8];
                                                                if (!(x === "text")) return [3, 3];
                                                                return [4, w.text()];
                                                            case 2:
                                                                _b = _d.sent();
                                                                return [3, 7];
                                                            case 3:
                                                                if (!(x === "html")) return [3, 5];
                                                                return [4, w.html()];
                                                            case 4:
                                                                _c = _d.sent();
                                                                return [3, 6];
                                                            case 5:
                                                                _c = x === "img" ? h.img(w.is("img") ? w : w.select("img").first()) : x === "own" ? w.ownText() : w.attr(x);
                                                                _d.label = 6;
                                                            case 6:
                                                                _b = _c;
                                                                _d.label = 7;
                                                            case 7:
                                                                E = _b;
                                                                if (E)
                                                                    return [2, String(E).trim()];
                                                                _d.label = 8;
                                                            case 8:
                                                                l++;
                                                                return [3, 1];
                                                            case 9: return [2, ""];
                                                        }
                                                    }); });
                                                }, url: function (a, n, c) { var l = h.page(n), f = String(a); return f = f.replace(/\[([^\]]*)\]/g, function (x, v) { return l > 1 ? v : ""; }), f = f.replace(/\{p\}/g, String(l)).replace(/\{p0\}/g, String(l - 1)).replace(/\{q\}/g, h.enc(c || "")).replace(/\{base\}/g, T), h.fix(f); }, items: function (a) {
                                                    return __awaiter(this, void 0, void 0, function () {
                                                        var n, c, l, f, x, v, S, _b, _c, _d;
                                                        var _f;
                                                        return __generator(this, function (_g) {
                                                            switch (_g.label) {
                                                                case 0:
                                                                    n = a.select(o.item), c = [], l = {}, f = 0;
                                                                    _g.label = 1;
                                                                case 1:
                                                                    if (!(f < n.size())) return [3, 9];
                                                                    return [4, n.get(f)];
                                                                case 2:
                                                                    x = _g.sent();
                                                                    return [4, m.pick(x, o.link || "a@href")];
                                                                case 3:
                                                                    v = _g.sent();
                                                                    if (!!(!v || l[v] || /^javascript|#$/.test(v))) return [3, 8];
                                                                    return [4, m.pick(x, o.title || "h3 || h2 || a@title || img@alt")];
                                                                case 4:
                                                                    S = _g.sent();
                                                                    _b = S;
                                                                    if (!_b) return [3, 7];
                                                                    l[v] = 1;
                                                                    _d = (_c = c).push;
                                                                    _f = { name: S, link: h.fix(v) };
                                                                    return [4, m.pick(x, o.cover || "img@img")];
                                                                case 5:
                                                                    _f.cover = _g.sent();
                                                                    return [4, m.pick(x, o.desc || "")];
                                                                case 6:
                                                                    _b = (_d.apply(_c, [(_f.description = _g.sent(), _f.host = T, _f)]));
                                                                    _g.label = 7;
                                                                case 7:
                                                                    _b;
                                                                    _g.label = 8;
                                                                case 8:
                                                                    f++;
                                                                    return [3, 1];
                                                                case 9: return [2, c];
                                                            }
                                                        });
                                                    });
                                                }, listPage: function (a, n, c) {
                                                    return __awaiter(this, void 0, void 0, function () { var l, f, x; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0: return [4, h.html(m.url(a, n, c), o.req)];
                                                            case 1:
                                                                l = _b.sent();
                                                                return [4, m.items(l)];
                                                            case 2:
                                                                f = _b.sent(), x = o.next ? l.select(o.next).size() > 0 : f.length >= (o.pageSize || 10);
                                                                return [2, s.success(f, h.next(x && f.length > 0, n))];
                                                        }
                                                    }); });
                                                }, browse: function (a, n) {
                                                    return __awaiter(this, void 0, void 0, function () { var c; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                c = o.tabs && o.tabs[a] || a;
                                                                return [4, m.listPage(c, n, "")];
                                                            case 1: return [2, _b.sent()];
                                                        }
                                                    }); });
                                                }, search: function (a, n) {
                                                    return __awaiter(this, void 0, void 0, function () { var c; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                if (!h.isUrl(a)) return [3, 2];
                                                                c = h.fix(a);
                                                                return [4, m.listPage(c + (c.indexOf("?") > 0 ? "&" : "?") + (o.pageParam || "page") + "={p}", n, "")];
                                                            case 1: return [2, _b.sent()];
                                                            case 2: return [4, m.listPage(o.search, n, a)];
                                                            case 3: return [2, _b.sent()];
                                                        }
                                                    }); });
                                                }, genre: function () {
                                                    return __awaiter(this, void 0, void 0, function () { var a, n; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                if (!o.genre)
                                                                    return [2, s.success([])];
                                                                return [4, h.html(h.fix(o.genrePage || "/"))];
                                                            case 1:
                                                                a = _b.sent();
                                                                return [4, j(a.select(o.genre), function (c) {
                                                                        return __awaiter(this, void 0, void 0, function () {
                                                                            var _b;
                                                                            return __generator(this, function (_c) {
                                                                                switch (_c.label) {
                                                                                    case 0:
                                                                                        _b = {};
                                                                                        return [4, c.text()];
                                                                                    case 1: return [2, (_b.title = _c.sent(), _b.input = h.fix(c.attr("href")), _b.script = "search.js", _b)];
                                                                                }
                                                                            });
                                                                        });
                                                                    })];
                                                            case 2:
                                                                n = _b.sent();
                                                                return [2, s.success(n.filter(function (c) { return c.title; }))];
                                                        }
                                                    }); });
                                                }, detail: function (a) {
                                                    return __awaiter(this, void 0, void 0, function () {
                                                        var n, c, l, _b, _c, _d, _f, _g;
                                                        var _h;
                                                        return __generator(this, function (_j) {
                                                            switch (_j.label) {
                                                                case 0: return [4, h.html(a, o.req)];
                                                                case 1:
                                                                    n = _j.sent();
                                                                    if (!o.d_genres) return [3, 3];
                                                                    return [4, j(n.select(o.d_genres), function (f) {
                                                                            return __awaiter(this, void 0, void 0, function () {
                                                                                var _b;
                                                                                return __generator(this, function (_c) {
                                                                                    switch (_c.label) {
                                                                                        case 0:
                                                                                            _b = {};
                                                                                            return [4, f.text()];
                                                                                        case 1: return [2, (_b.title = _c.sent(), _b.input = h.fix(f.attr("href")), _b.script = "search.js", _b)];
                                                                                    }
                                                                                });
                                                                            });
                                                                        })];
                                                                case 2:
                                                                    _b = _j.sent();
                                                                    return [3, 4];
                                                                case 3:
                                                                    _b = [];
                                                                    _j.label = 4;
                                                                case 4:
                                                                    c = _b;
                                                                    return [4, m.pick(n, o.d_status)];
                                                                case 5:
                                                                    l = _j.sent();
                                                                    _d = (_c = s).success;
                                                                    _h = {};
                                                                    return [4, m.pick(n, o.d_title || "h1")];
                                                                case 6:
                                                                    _h.name = _j.sent();
                                                                    _g = (_f = h).fix;
                                                                    return [4, m.pick(n, o.d_cover || "meta[property=og:image]@content")];
                                                                case 7:
                                                                    _h.cover = _g.apply(_f, [_j.sent()]);
                                                                    return [4, m.pick(n, o.d_author)];
                                                                case 8:
                                                                    _h.author = _j.sent();
                                                                    return [4, m.pick(n, (o.d_desc || "meta[name=description]@content").replace(/$/, ""))];
                                                                case 9: return [2, _d.apply(_c, [(_h.description = _j.sent(), _h.detail = l ? "Tình trạng: " + l : "", _h.ongoing = h.ongoing(l), _h.genres = c, _h.host = T, _h)])];
                                                            }
                                                        });
                                                    });
                                                }, toc: function (a) {
                                                    return __awaiter(this, void 0, void 0, function () {
                                                        var n, c, l, f, x, _b, v, S, w, E, k, _c, _d, _f, _g, B, H;
                                                        var _h;
                                                        return __generator(this, function (_j) {
                                                            switch (_j.label) {
                                                                case 0:
                                                                    if (o.single)
                                                                        return [2, s.success([{ name: o.single === !0 ? "Xem / Đọc" : o.single, url: a, host: T }])];
                                                                    n = [a], c = [], l = {};
                                                                    return [4, h.html(a, o.req)];
                                                                case 1:
                                                                    f = _j.sent();
                                                                    if (!o.ch_url) return [3, 5];
                                                                    return [4, m.pick(f, o.ch_url)];
                                                                case 2:
                                                                    x = _j.sent();
                                                                    _b = x;
                                                                    if (!_b) return [3, 4];
                                                                    return [4, h.html(h.fix(x), o.req)];
                                                                case 3:
                                                                    _b = (f = _j.sent());
                                                                    _j.label = 4;
                                                                case 4:
                                                                    _b;
                                                                    _j.label = 5;
                                                                case 5:
                                                                    v = 0;
                                                                    _j.label = 6;
                                                                case 6:
                                                                    if (!(v < (o.ch_maxPages || 60))) return [3, 18];
                                                                    S = f.select(o.ch_list), w = 0;
                                                                    _j.label = 7;
                                                                case 7:
                                                                    if (!(w < S.size())) return [3, 15];
                                                                    return [4, S.get(w)];
                                                                case 8:
                                                                    E = _j.sent(), k = E.attr("href") || E.attr("data-href");
                                                                    _c = !k || k === "#" || l[k];
                                                                    if (_c) return [3, 13];
                                                                    l[k] = 1;
                                                                    _f = (_d = c).push;
                                                                    _h = {};
                                                                    if (!o.ch_name) return [3, 10];
                                                                    return [4, m.pick(E, o.ch_name)];
                                                                case 9:
                                                                    _g = _j.sent();
                                                                    return [3, 12];
                                                                case 10: return [4, E.text()];
                                                                case 11:
                                                                    _g = _j.sent();
                                                                    _j.label = 12;
                                                                case 12:
                                                                    _c = (_f.apply(_d, [(_h.name = (_g) || E.attr("title"), _h.url = h.fix(k), _h.host = T, _h)]));
                                                                    _j.label = 13;
                                                                case 13:
                                                                    _c;
                                                                    _j.label = 14;
                                                                case 14:
                                                                    w++;
                                                                    return [3, 7];
                                                                case 15:
                                                                    B = o.ch_next ? f.select(o.ch_next).first() : null;
                                                                    if (!B || !B.attr("href"))
                                                                        return [3, 18];
                                                                    H = h.fix(B.attr("href"));
                                                                    if (n.indexOf(H) >= 0)
                                                                        return [3, 18];
                                                                    n.push(H);
                                                                    return [4, h.html(H, o.req)];
                                                                case 16:
                                                                    f = _j.sent();
                                                                    _j.label = 17;
                                                                case 17:
                                                                    v++;
                                                                    return [3, 6];
                                                                case 18: return [2, (o.ch_reverse && c.reverse(), s.success(c))];
                                                            }
                                                        });
                                                    });
                                                }, pages: function (a) {
                                                    return __awaiter(this, void 0, void 0, function () { var n, c, l, f, x, v, S, w, _b, _c, E, k; return __generator(this, function (_d) {
                                                        switch (_d.label) {
                                                            case 0:
                                                                n = [], c = [a], l = a, f = 0;
                                                                _d.label = 1;
                                                            case 1:
                                                                if (!(f < (o.pages_max || 40))) return [3, 8];
                                                                return [4, h.html(l, o.req)];
                                                            case 2:
                                                                x = _d.sent(), v = x.select(o.pages || ".page-chapter img, .reading-content img, .chapter-content img"), S = 0;
                                                                _d.label = 3;
                                                            case 3:
                                                                if (!(S < v.size())) return [3, 6];
                                                                _c = (_b = h).img;
                                                                return [4, v.get(S)];
                                                            case 4:
                                                                w = _c.apply(_b, [_d.sent()]);
                                                                w && n.indexOf(w) < 0 && n.push(w);
                                                                _d.label = 5;
                                                            case 5:
                                                                S++;
                                                                return [3, 3];
                                                            case 6:
                                                                if (!o.pages_next)
                                                                    return [3, 8];
                                                                E = x.select(o.pages_next).first();
                                                                if (!E)
                                                                    return [3, 8];
                                                                k = h.fix(E.attr("href"));
                                                                if (!k || c.indexOf(k) >= 0)
                                                                    return [3, 8];
                                                                c.push(k), l = k;
                                                                _d.label = 7;
                                                            case 7:
                                                                f++;
                                                                return [3, 1];
                                                            case 8: return [2, s.success(n)];
                                                        }
                                                    }); });
                                                }, text: function (a) {
                                                    return __awaiter(this, void 0, void 0, function () { var n, c, _b, _c, _d, _f; return __generator(this, function (_g) {
                                                        switch (_g.label) {
                                                            case 0: return [4, h.html(a, o.req)];
                                                            case 1:
                                                                n = _g.sent(), c = n.select(o.content || "#chapter-c, .chapter-c, #chapter-content, .chapter-content, .reading-content").first();
                                                                if (!c) return [3, 4];
                                                                _d = (_c = s).success;
                                                                return [4, h.cleanContent(c)];
                                                            case 2:
                                                                _f = [_g.sent()];
                                                                return [4, m.pick(n, o.c_title || "h1 || h2")];
                                                            case 3:
                                                                _b = _d.apply(_c, _f.concat([_g.sent()]));
                                                                return [3, 5];
                                                            case 4:
                                                                _b = s.error("Không tìm thấy nội dung");
                                                                _g.label = 5;
                                                            case 5: return [2, _b];
                                                        }
                                                    }); });
                                                }, servers: function (a) {
                                                    return __awaiter(this, void 0, void 0, function () { var n, c; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                if (!o.servers)
                                                                    return [2, s.success([{ title: "Server", data: a }])];
                                                                return [4, h.html(a, o.req)];
                                                            case 1:
                                                                n = _b.sent();
                                                                return [4, j(n.select(o.servers), function (l) {
                                                                        return __awaiter(this, void 0, void 0, function () {
                                                                            var f;
                                                                            var _b;
                                                                            return __generator(this, function (_c) {
                                                                                switch (_c.label) {
                                                                                    case 0: return [4, m.pick(l, o.server_data || ":self@data-link || :self@data-src || :self@href")];
                                                                                    case 1:
                                                                                        f = _c.sent();
                                                                                        _b = {};
                                                                                        return [4, l.text()];
                                                                                    case 2: return [2, (_b.title = (_c.sent()) || "Server", _b.data = h.fix(f), _b)];
                                                                                }
                                                                            });
                                                                        });
                                                                    })];
                                                            case 2:
                                                                c = (_b.sent()).filter(function (l) { return l.data; });
                                                                return [2, s.success(c.length ? c : [{ title: "Server", data: a }])];
                                                        }
                                                    }); });
                                                }, sniff: function (a) { a = String(a || "").replace(/\\\//g, "/"); var n = a.match(/https?:[^"'\s<>\\]+?\.m3u8[^"'\s<>\\]*/i) || a.match(/https?:[^"'\s<>\\]+?\.mp4[^"'\s<>\\]*/i); return n ? n[0] : ""; }, track: function (a, n) {
                                                    return __awaiter(this, void 0, void 0, function () { var c, l, f, x, v, S; return __generator(this, function (_b) {
                                                        switch (_b.label) {
                                                            case 0:
                                                                if (n = n || 0, /\.(m3u8|mp4)(\?|$)/i.test(a))
                                                                    return [2, s.success({ type: "native", data: a, headers: { Referer: T + "/" } })];
                                                                return [4, h.get(a)];
                                                            case 1:
                                                                c = _b.sent();
                                                                return [4, c.text()];
                                                            case 2:
                                                                l = _b.sent(), f = m.sniff(l);
                                                                if (f)
                                                                    return [2, s.success({ type: "native", data: f, headers: { Referer: n ? a : T + "/" } })];
                                                                x = i.parse(l, a), v = x.select(o.iframe || "iframe[src], iframe[data-src]").first();
                                                                if (!(v && n < 2)) return [3, 4];
                                                                S = h.fix(v.attr("src") || v.attr("data-src"));
                                                                if (!S) return [3, 4];
                                                                return [4, m.track(S, n + 1)];
                                                            case 3: return [2, _b.sent()];
                                                            case 4: return [2, s.success({ type: "webview", data: a })];
                                                        }
                                                    }); });
                                                } };
                                            return [2, typeof G == "function" ? G : void 0];
                                        }); });
                                    })()];
                            case 1: return [2, _b.sent()];
                        }
                    }); });
                })(t.fetch, t.Http, t.Html, t.Response, t.localStorage, t.cacheStorage, t.localConfig, t.localCookie, t.sleep, t.Log, t.console, t.log, t.UserAgent, t.Engine, t.Graphics, t.Script)];
        }); });
    } };
function Ur(t) { return new Et({ meta: oe, scripts: Or, host: t }); }
var l0 = require("@libs/fetch").fetchApi, Qe = null;
try {
    Qe = require("@libs/storage");
}
catch (t) {
    Qe = null;
}
var Au = {}, kt = Qe && Qe.storage ? Qe.storage : { get: function (t) { return Au[t]; }, set: function (t, e) { Au[t] = e; }, delete: function (t) { delete Au[t]; } }, Tu = (function () {
    function class_2() {
        var _this = this;
        this.id = oe.lnId, this.name = oe.name, this.icon = oe.lnIcon, this.site = oe.source, this.version = oe.lnVersion, this.filters = void 0, this.webStorageUtilized = !1, this.engine = Ur({ name: "LNReader", request: function (e) { return __awaiter(_this, void 0, void 0, function () {
                var u, r, i;
                var _b;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            u = { method: e.method, headers: e.headers };
                            e.body != null && e.method !== "GET" && (u.body = e.body);
                            return [4, l0(e.url, u)];
                        case 1:
                            r = _c.sent(), i = {};
                            try {
                                r.headers.forEach(function (s, d) { i[d] = s; });
                            }
                            catch (s) { }
                            _b = { status: r.status, url: r.url || e.url, headers: i };
                            return [4, r.text()];
                        case 2: return [2, (_b.text = _c.sent(), _b)];
                    }
                });
            }); }, storageGet: function (e) { var u = kt.get("vb_" + e); return u == null ? null : String(u); }, storageSet: function (e, u) { u == null ? kt.delete && kt.delete("vb_" + e) : kt.set("vb_" + e, String(u)); }, config: function (e) { return null; }, log: function (e) { return console.log(e); } });
    }
    class_2.prototype.popularNovels = function (e, u) {
        return __awaiter(this, void 0, void 0, function () { var _b; return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    if (!(u && u.showLatestNovels)) return [3, 2];
                    return [4, this.engine.latest(e)];
                case 1:
                    _b = _c.sent();
                    return [3, 4];
                case 2: return [4, this.engine.popular(e)];
                case 3:
                    _b = _c.sent();
                    _c.label = 4;
                case 4: return [2, (_b).items.map(function (i) { return ({ name: i.name, path: i.link, cover: i.cover }); })];
            }
        }); });
    };
    class_2.prototype.searchNovels = function (e, u) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, this.engine.search(e, u)];
                case 1: return [2, (_b.sent()).items.map(function (i) { return ({ name: i.name, path: i.link, cover: i.cover }); })];
            }
        }); });
    };
    class_2.prototype.parseNovel = function (e) {
        return __awaiter(this, void 0, void 0, function () { var u, r; return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, this.engine.detail(e)];
                case 1:
                    u = _b.sent();
                    return [4, this.engine.chapters(e)];
                case 2:
                    r = _b.sent();
                    return [2, { path: e, name: u.name || "Untitled", cover: u.cover, summary: u.description, author: u.author, status: u.ongoing ? "Ongoing" : "Completed", genres: u.genres.join(","), chapters: r.map(function (i, s) { return ({ name: i.name, path: i.url, chapterNumber: s + 1 }); }) }];
            }
        }); });
    };
    class_2.prototype.parseChapter = function (e) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, this.engine.content(e)];
                case 1: return [2, (_b.sent()).html];
            }
        }); });
    };
    class_2.prototype.resolveUrl = function (e, u) { return /^https?:/i.test(e) ? e : oe.source.replace(/\/+$/, "") + "/" + String(e).replace(/^\/+/, ""); };
    return class_2;
}()), d0 = new Tu;
